import { Recruiter } from '@/types';
import { RecruiterItem } from '../recruiterItem';

interface RecruiterListProps {
	recruiters: Recruiter[];
}

export function RecruiterList({ recruiters }: RecruiterListProps) {
	return (
		<ol className='list-decimal pl-6 flex flex-col items-start flex-wrap max-h-[85vh] overflow-y-auto w-full'>
			<li className='sticky top-0 bg-gray-900 w-full p-2 border-b-2 border-blue-500 z-10 font-bold'>
				Perfis Encontrados ({recruiters.length})
			</li>
			{recruiters.map((recruiter) => (
				<li
					key={recruiter.linkedin}
					className='mx-5 w-full'>
					<RecruiterItem recruiter={recruiter} />
				</li>
			))}
		</ol>
	);
}
