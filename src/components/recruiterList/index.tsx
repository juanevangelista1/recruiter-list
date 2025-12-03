import { Recruiter } from '@/types';
import { RecruiterItem } from '../recruiterItem';

interface RecruiterListProps {
	recruiters: Recruiter[];
	totalCount: number;
}

export function RecruiterList({ recruiters, totalCount }: RecruiterListProps) {
	return (
		<div className='mt-8 bg-gray-800 rounded-xl shadow-2xl p-4'>
			<h2 className='text-xl font-semibold mb-4 text-white'>
				Lista de Recrutadores ({totalCount} no total)
			</h2>
			<ol className='list-decimal pl-6 flex flex-col items-start w-full divide-y divide-gray-700'>
				{recruiters.map((recruiter) => (
					<li
						key={recruiter.linkedin}
						className='mx-5 w-full py-3'>
						<RecruiterItem recruiter={recruiter} />
					</li>
				))}
			</ol>

			{recruiters.length === 0 && (
				<p className='text-center text-gray-500 py-4'>Nenhum recrutador nesta página.</p>
			)}
		</div>
	);
}
