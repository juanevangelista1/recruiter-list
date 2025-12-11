'use client';
import { Recruiter } from '@/types';
import { FileUploader } from '@/components/fileUploader';
import { RecruiterList } from '@/components/recruiterList';
import { PaginationControls } from '@/components/paginationControls';

import { useState, useMemo } from 'react';

const ITEMS_PER_PAGE = 10;

export default function Home() {
	const [recruiters, setRecruiters] = useState<Recruiter[]>([]);
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(recruiters.length / ITEMS_PER_PAGE);

	const currentRecruiters = useMemo(() => {
		const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
		const endIndex = startIndex + ITEMS_PER_PAGE;
		return recruiters.slice(startIndex, endIndex);
	}, [recruiters, currentPage]);

	const handleDataLoaded = (data: Recruiter[]) => {
		setRecruiters(data);
		setCurrentPage(1);
	};

	return (
		<div className='container mx-auto p-4 max-w-4xl'>
			<h1 className='text-3xl font-bold mb-6 text-center text-blue-400'>Recruiter List Manager 📋</h1>
			<div className='flex flex-col items-center'>
				<FileUploader onDataLoaded={handleDataLoaded} />
			</div>

			{recruiters.length > 0 && (
				<>
					<RecruiterList
						recruiters={currentRecruiters}
						totalCount={recruiters.length}
						currentPage={currentPage}
						itemsPerPage={ITEMS_PER_PAGE}
					/>

					<PaginationControls
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={setCurrentPage}
					/>
				</>
			)}
		</div>
	);
}
