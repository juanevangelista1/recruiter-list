'use client';
import { Recruiter } from '@/types';
import { FileUploader } from '@/components/fileUploader';
import { RecruiterList } from '@/components/recruiterList';

import { useState } from 'react';

export default function Home() {
	const [recruiters, setRecruiters] = useState<Recruiter[]>([]);

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-3xl font-bold mb-6 text-center text-white'>Recruiter List Manager 📋</h1>
			<div className='flex flex-col items-center'>
				<FileUploader onDataLoaded={setRecruiters} />
			</div>
			{recruiters.length > 0 && <RecruiterList recruiters={recruiters} />}
		</div>
	);
}
