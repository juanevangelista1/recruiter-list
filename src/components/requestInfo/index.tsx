'use client';

import { useEffect, useState } from 'react';

// components/RequestInfo.tsx
interface RequestInfoProps {
	date: Date;
}

export function RequestInfo({ date }: RequestInfoProps) {
	const [data, setDate] = useState<string>('');

	useEffect(() => {
		const now = new Date();
		setDate(now.toLocaleString());
	}, []);
	return (
		<div className='ml-4 text-sm text-gray-600'>
			Solicitação enviada em {date.toLocaleDateString()} às {date.toLocaleTimeString()}
		</div>
	);
}
