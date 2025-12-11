import { AppData, LanguageVacancy } from '@/types';

interface LanguageVacancyListProps {
	vacancies: AppData;
	totalCount: number;
	currentPage: number;
	itemsPerPage: number;
}

export function LanguageVacancyList({
	vacancies,
	totalCount,
	currentPage,
	itemsPerPage,
}: LanguageVacancyListProps) {
	const languageVacancies = vacancies as LanguageVacancy[];

	if (languageVacancies.length === 0) return null;
	const headers = Object.keys(languageVacancies[0]).filter((key) => key !== 'id');
	const startNumber = (currentPage - 1) * itemsPerPage + 1;

	return (
		<div className='mt-8 bg-gray-800 rounded-xl shadow-2xl p-4 overflow-x-auto'>
			<h2 className='text-xl font-semibold mb-4 text-white'>
				Vagas por Linguagem ({totalCount} no total)
			</h2>

			<table className='min-w-full divide-y divide-gray-700'>
				<thead className='bg-gray-700 sticky top-0'>
					<tr>
						<th className='px-4 py-2 text-left text-sm font-medium text-gray-300 uppercase tracking-wider'>
							#
						</th>
						{headers.map((header) => (
							<th
								key={header}
								className='px-4 py-2 text-left text-sm font-medium text-gray-300 uppercase tracking-wider min-w-[150px]'>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody className='divide-y divide-gray-700'>
					{languageVacancies.map((item, index) => (
						<tr
							key={item.id}
							className='hover:bg-gray-700 transition-colors'>
							<td className='px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-400'>
								{startNumber + index}
							</td>

							{headers.map((header) => {
								const data = item[header];
								const isUrl =
									typeof data === 'string' && (data.startsWith('http') || data.includes('linkedin.com'));

								return (
									<td
										key={`${item.id}-${header}`}
										className='px-4 py-3 whitespace-nowrap text-sm text-white'>
										{isUrl ? (
											<a
												href={data as string}
												target='_blank'
												rel='noopener noreferrer'
												className='text-blue-400 hover:underline truncate block max-w-[200px]'
												title={data as string}>
												Ver Perfil
											</a>
										) : (
											<span className='truncate block max-w-[200px]'>{data}</span>
										)}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
