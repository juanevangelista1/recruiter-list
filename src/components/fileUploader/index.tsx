import { useRef } from 'react';
import { Recruiter } from '@/types';
import { useCsvParser } from '@/hooks/useCsvParser';

interface FileUploaderProps {
	onDataLoaded: (data: Recruiter[]) => void;
}

export function FileUploader({ onDataLoaded }: FileUploaderProps) {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const { fileName, isLoading, handleFileChange } = useCsvParser(onDataLoaded);

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
						accept='.csv,.tsv'
						onChange={handleFileChange}
						className='hidden'
						disabled={isLoading}
					/>
					<button
						type='button'
						onClick={handleButtonClick}
						className='w-[350px] border p-3 rounded-md cursor-pointer mt-1 bg-white/10 text-white hover:bg-white/20 transition-colors truncate disabled:opacity-50 disabled:cursor-wait'
						disabled={isLoading}>
						{isLoading ? 'Processando arquivo...' : fileName}
					</button>
				</div>
				<small className='text-sm text-gray-400'>Suporta apenas arquivos CSV/TSV.</small>
			</label>
		</div>
	);
}
