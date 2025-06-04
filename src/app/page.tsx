'use client';
import { FileUploader, Recruiter } from '@/components/fileUploader';
import { RecruiterList } from '@/components/recruiterList';

import { useState } from 'react';

export default function Home() {
	const [recruiters, setRecruiters] = useState<Recruiter[]>([]);

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-2xl font-bold mb-4'>Lista de Recrutadores</h1>
			<FileUploader onDataLoaded={setRecruiters} />
			{recruiters.length > 0 && <RecruiterList recruiters={recruiters} />}
		</div>
	);
}
