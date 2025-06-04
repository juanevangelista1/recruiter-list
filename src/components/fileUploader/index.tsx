import Papa from 'papaparse';
import { ChangeEvent, useRef, useState } from 'react';

export interface Recruiter {
	id: number;
	linkedin: string;
	nome: string;
}

interface FileUploaderProps {
	onDataLoaded: (data: Recruiter[]) => void;
}

export function FileUploader({ onDataLoaded }: FileUploaderProps) {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [fileName, setFileName] = useState<string>('Faça o upload de um arquivo .csv');

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		setFileName(file.name);

		const reader = new FileReader();
		reader.onload = (event) => {
			const text = event.target?.result;
			if (typeof text === 'string') {
				Papa.parse<string[]>(text, {
					header: false,
					complete: (results) => {
						const mappedData = results.data
							.map((row, index) => {
								if (!row[0]) return null;
								const link = row[0].toString().trim();
								return {
									id: index,
									linkedin: link,
									nome: link,
								};
							})
							.filter((item): item is Recruiter => item !== null);
						onDataLoaded(mappedData);
					},
					error: (error: Error) => {
						console.error('Erro no parsing do arquivo:', error);
						setFileName('Escolha o arquivo');
					},
				});
			}
		};
		reader.onerror = () => {
			console.error('Erro ao ler o arquivo');
			setFileName('Escolha o arquivo');
		};
		reader.readAsText(file);
	};

	const handleButtonClick = () => {
		fileInputRef.current?.click();
	};

	return (
		<div className='mb-4'>
			<label className='mb-2 flex gap-1.5 flex-col'>
				<div className='relative'>
					<input
						ref={fileInputRef}
						type='file'
						accept='.csv,.tsv, .xls, .xlsx'
						onChange={handleFileChange}
						className='hidden'
					/>
					<button
						type='button'
						onClick={handleButtonClick}
						className='w-[350px] border p-3 rounded-md cursor-pointer mt-1 bg-white/10 text-white hover:bg-white/20 transition-colors truncate'>
						{fileName}
					</button>
				</div>
			</label>
		</div>
	);
}
