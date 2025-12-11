'use client';

interface PaginationControlsProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

function getVisiblePages(currentPage: number, totalPages: number): (number | '...')[] {
	const maxVisiblePages = 7;
	if (totalPages <= maxVisiblePages) {
		return Array.from({ length: totalPages }, (_, i) => i + 1);
	}

	const middle = Math.floor(maxVisiblePages / 2);
	let startPage = Math.max(1, currentPage - middle + 1);
	const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

	if (endPage - startPage + 1 < maxVisiblePages) {
		startPage = Math.max(1, endPage - maxVisiblePages + 1);
	}

	const pages: (number | '...')[] = [];

	for (let i = startPage; i <= endPage; i++) {
		pages.push(i);
	}

	if (startPage > 1) {
		pages.unshift('...');
		pages.unshift(1);
	}
	if (endPage < totalPages) {
		pages.push('...');
		pages.push(totalPages);
	}

	const uniquePages: (number | '...')[] = [];
	pages.forEach((page, index) => {
		if (page === '...' && pages[index + 1] === '...') {
			return;
		}
		if (page === pages[index - 1] && typeof page === 'number') {
			return;
		}
		uniquePages.push(page);
	});

	return uniquePages;
}

export function PaginationControls({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationControlsProps) {
	if (totalPages <= 1) return null;

	const pagesRange = getVisiblePages(currentPage, totalPages);

	const buttonClass =
		'h-10 w-10 mx-0.5 flex justify-center items-center rounded-lg transition-colors font-medium border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500';
	const activeClass = 'bg-blue-600 text-white hover:bg-blue-700';
	const inactiveClass = 'bg-gray-700 text-gray-300 hover:bg-gray-600';
	const disabledClass = 'opacity-50 cursor-not-allowed';

	return (
		<div className='flex justify-center items-center my-6 space-x-1 flex-wrap'>
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className={`h-10 px-4 rounded-lg mx-1 ${currentPage === 1 ? disabledClass : inactiveClass}`}>
				Anterior
			</button>

			{pagesRange.map((page, index) => {
				if (page === '...') {
					return (
						<span
							key={`dots-${index}`}
							className='text-gray-400 mx-1'>
							...
						</span>
					);
				}

				return (
					<button
						key={page}
						onClick={() => onPageChange(page as number)}
						className={`${buttonClass} ${page === currentPage ? activeClass : inactiveClass}`}>
						{page}
					</button>
				);
			})}

			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className={`cursor-pointer h-10 px-4 rounded-lg mx-1 ${
					currentPage === totalPages ? disabledClass : inactiveClass
				}`}>
				Próximo
			</button>
		</div>
	);
}
