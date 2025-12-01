'use client';

interface RequestInfoProps {
	date: Date;
}

export function RequestInfo({ date }: RequestInfoProps) {
	if (!date || !(date instanceof Date && !isNaN(date.getTime()))) {
		return null;
	}

	return (
		<div className='ml-4 text-sm text-gray-500 italic flex items-center gap-1.5'>
			<span className='text-green-500'>✔</span>
			<span>
				Solicitação enviada em {date.toLocaleDateString()} às{' '}
				{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
			</span>
		</div>
	);
}
