'use client';
import { useState, useEffect } from 'react';
import { Recruiter } from '../fileUploader';

interface RecruiterItemProps {
	recruiter: Recruiter;
}

export function RecruiterItem({ recruiter }: RecruiterItemProps) {
	const storageKey = `recruiter_${recruiter.nome}`;
	const [requestSent, setRequestSent] = useState<{ sent: boolean; date?: Date }>({ sent: false });

	useEffect(() => {
		const storedData = localStorage.getItem(storageKey);
		if (storedData) {
			try {
				const parsed = JSON.parse(storedData);
				if (parsed.sent && parsed.date) {
					setRequestSent({ sent: true, date: new Date(parsed.date) });
				}
			} catch (error) {
				console.error('Erro ao ler dados do localStorage:', error);
			}
		}
	}, [storageKey]);

	const handleClick = () => {
		let url = recruiter.nome;
		if (!url.startsWith('http')) {
			url = 'https://' + url;
		}
		window.open(url, '_blank', 'noopener,noreferrer');
		const now = new Date();
		setRequestSent({ sent: true, date: now });
		localStorage.setItem(storageKey, JSON.stringify({ sent: true, date: now.toISOString() }));
	};

	return (
		<div className='mb-2 flex items-center justify-between'>
			<div className='flex items-center space-x-4'>
				{requestSent.sent ? (
					<button
						onClick={handleClick}
						className='text-white px-3 py-1 rounded bg-red-500 cursor-not-allowed'>
						Solicitação Enviada
					</button>
				) : (
					<button
						onClick={handleClick}
						className='text-white px-3 py-1 rounded cursor-pointer bg-green-500'>
						Abrir no LinkedIn
					</button>
				)}
			</div>
		</div>
	);
}
