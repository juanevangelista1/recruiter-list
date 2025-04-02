// components/RecruiterList.tsx

import { Recruiter } from '../fileUploader';
import { RecruiterItem } from '../recruiterItem';

interface RecruiterListProps {
	recruiters: Recruiter[];
}

export function RecruiterList({ recruiters }: RecruiterListProps) {
	return (
		<ol className='list-decimal pl-6'>
			{recruiters.map((recruiter, index) => (
				<li key={index}>
					<RecruiterItem recruiter={recruiter} />
				</li>
			))}
		</ol>
	);
}
