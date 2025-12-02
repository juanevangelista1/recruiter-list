import { Recruiter } from '@/types';
import { useRecruiterTracking } from '@/hooks/useRecruiterTracking';
import { sanitizeUrl } from '@/utils/url';
import { RequestInfo } from '../requestInfo';

interface RecruiterItemProps {
	recruiter: Recruiter;
}

export function RecruiterItem({ recruiter }: RecruiterItemProps) {
	const [trackingState, markAsSent] = useRecruiterTracking(recruiter.linkedin);
	const { sent, date } = trackingState;

	const handleClick = () => {
		const url = sanitizeUrl(recruiter.linkedin);

		window.open(url, '_blank', 'noopener,noreferrer');

		if (!sent) {
			markAsSent();
		}
	};

	const buttonClasses = sent
		? 'text-white px-3 py-1 rounded bg-red-500 cursor-not-allowed hover:bg-red-600 transition-colors'
		: 'text-white px-3 py-1 rounded cursor-pointer bg-green-500 hover:bg-green-600 transition-colors';

	const buttonText = sent ? 'Solicitação Enviada' : 'Abrir no LinkedIn';

	return (
		<div className='mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full p-2 border-b border-gray-700'>
			<div className='flex flex-col mb-2 sm:mb-0'>
				<a
					href={sanitizeUrl(recruiter.linkedin)}
					target='_blank'
					rel='noopener noreferrer'
					className='text-lg font-medium hover:text-blue-400 truncate w-64'
					title={recruiter.linkedin}>
					{recruiter.nome}
				</a>
				<span className='text-xs text-gray-500 truncate w-64'>{recruiter.linkedin}</span>
			</div>

			<div className='flex items-center space-x-4'>
				<button
					onClick={handleClick}
					className={buttonClasses}
					disabled={sent}>
					{buttonText}
				</button>

				{date && <RequestInfo date={date} />}
			</div>
		</div>
	);
}
