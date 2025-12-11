import { TabKey } from '@/types';

interface TabControlsProps {
	activeTab: TabKey;
	onTabChange: (key: TabKey) => void;
	hasRecruiters: boolean;
	hasVacancies: boolean;
}

export function TabControls({
	activeTab,
	onTabChange,
	hasRecruiters,
	hasVacancies,
}: TabControlsProps) {
	const baseClass = 'px-4 py-2 font-medium text-lg transition-colors border-b-4';
	const activeClass = 'border-blue-500 text-blue-400';
	const inactiveClass = 'border-transparent text-gray-400 hover:text-white';
	const disabledClass = 'cursor-not-allowed opacity-50';

	const isRecruiterDisabled = !hasRecruiters;
	const isVacancyDisabled = !hasVacancies;

	return (
		<div className='flex justify-start mb-6 border-b border-gray-700 space-x-2'>
			<button
				onClick={() => onTabChange('Recruiters')}
				className={`${baseClass} ${activeTab === 'Recruiters' ? activeClass : inactiveClass} ${
					isRecruiterDisabled ? disabledClass : ''
				}`}
				disabled={isRecruiterDisabled}>
				Recrutadores
			</button>

			<button
				onClick={() => onTabChange('LanguageVacancies')}
				className={`${baseClass} ${activeTab === 'LanguageVacancies' ? activeClass : inactiveClass} ${
					isVacancyDisabled ? disabledClass : ''
				}`}
				disabled={isVacancyDisabled}>
				Vagas por Linguagem
			</button>
		</div>
	);
}
