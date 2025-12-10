'use client';

interface PaginationControlsProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

function getPaginationRange(currentPage: number, totalPages: number, siblings: number = 2) {
	const range = [];

	range.push(1);

	const start = Math.max(2, currentPage - siblings);
	const end = Math.min(totalPages - 1, currentPage + siblings);

	if (start > 2) {
		range.push(null);
	}

	for (let i = start; i <= end; i++) {
		range.push(i);
	}

	if (end < totalPages - 1) {
		range.push(null);
	}
	if (totalPages > 1 && !range.includes(totalPages)) {
		range.push(totalPages);
	}

	return range;
}

export function PaginationControls({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationControlsProps) {
	if (totalPages <= 1) return null;

	const pagesRange = getPaginationRange(currentPage, totalPages);

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
				if (page === null) {
					return (
						<span
							key={index}
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
				className={`h-10 px-4 rounded-lg mx-1 ${
					currentPage === totalPages ? disabledClass : inactiveClass
				}`}>
				Próximo
			</button>
		</div>
	);
}
