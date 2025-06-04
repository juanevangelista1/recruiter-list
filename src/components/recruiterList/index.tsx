import { Recruiter } from '../fileUploader';
import { RecruiterItem } from '../recruiterItem';

interface RecruiterListProps {
	recruiters: Recruiter[];
}

export function RecruiterList({ recruiters }: RecruiterListProps) {
	return (
		<ol className='list-decimal pl-6 flex flex-col items-start flex-wrap max-h-[85vh] overflow-y-auto'>
			{recruiters.map((recruiter, index) => (
				<li
					key={index}
					className='mx-5'>
					<RecruiterItem recruiter={recruiter} />
				</li>
			))}
		</ol>
	);
}
