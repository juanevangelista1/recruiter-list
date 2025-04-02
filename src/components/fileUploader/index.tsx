import Papa from 'papaparse';
import { ChangeEvent } from 'react';

export interface Recruiter {
	id: number;
	linkedin: string;
	nome: string;
}

interface FileUploaderProps {
	onDataLoaded: (data: Recruiter[]) => void;
}

export function FileUploader({ onDataLoaded }: FileUploaderProps) {
	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (event) => {
			const text = event.target?.result;
			if (typeof text === 'string') {
				Papa.parse(text, {
					header: false, // Não há cabeçalho, pois só há links
					complete: (results) => {
						console.log('Dados extraídos:', results.data);
						// Mapeia cada linha para um objeto Recruiter
						const mappedData = results.data
							.map((row: any, index: number) => {
								// Verifica se a linha não está vazia
								if (!row[0]) return null;
								const link = row[0].toString().trim();
								return {
									id: index,
									linkedin: link,
									nome: link, // Se não houver um nome, podemos exibir o próprio link
								};
							})
							.filter(Boolean);
						onDataLoaded(mappedData);
					},
					error: (error) => {
						console.error('Erro no parsing do arquivo:', error);
					},
				});
			}
		};
		reader.readAsText(file);
	};

	return (
		<div className='mb-4'>
			<input
				type='file'
				accept='.csv'
				onChange={handleFileChange}
				className='border p-2'
			/>
		</div>
	);
}
