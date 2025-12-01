import Papa from 'papaparse';
import { ChangeEvent, useState } from 'react';
import { Recruiter } from '@/types';

interface UseCsvParserResult {
	fileName: string;
	isLoading: boolean;
	handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function useCsvParser(onDataLoaded: (data: Recruiter[]) => void): UseCsvParserResult {
	const [fileName, setFileName] = useState<string>('Faça o upload de um arquivo .csv');
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) {
			setFileName('Nenhum arquivo selecionado.');
			return;
		}

		setFileName(file.name);
		setIsLoading(true);

		const reader = new FileReader();
		reader.onload = (event) => {
			const text = event.target?.result;
			if (typeof text === 'string') {
				Papa.parse<string[]>(text, {
					header: false,
					skipEmptyLines: true,
					complete: (results) => {
						const mappedData: Recruiter[] = results.data
							.map((row, index) => {
								const rawLink = row[0]?.toString().trim();
								if (!rawLink) return null;

								const simpleName =
									rawLink.replace(/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/([^/]+)\/?.*$/, '$3') ||
									rawLink;

								return {
									id: index,
									linkedin: rawLink,
									nome: simpleName,
								};
							})
							.filter((item): item is Recruiter => item !== null);

						onDataLoaded(mappedData);
						setIsLoading(false);
					},
					error: (error: Error) => {
						console.error('Erro no parsing do arquivo:', error);
						setFileName('Erro ao processar arquivo');
						setIsLoading(false);
					},
				});
			} else {
				setIsLoading(false);
			}
		};
		reader.onerror = () => {
			console.error('Erro ao ler o arquivo');
			setFileName('Erro ao ler arquivo');
			setIsLoading(false);
		};
		reader.readAsText(file);
	};

	return { fileName, isLoading, handleFileChange };
}
