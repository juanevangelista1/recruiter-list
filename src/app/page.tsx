// src/app/page.tsx (REAJUSTADO: Gerenciamento de Múltiplos Dados e Paginação)

'use client';
import { Recruiter, AppData, TabKey } from '@/types';
import { FileUploader } from '@/components/fileUploader';
import { RecruiterList } from '@/components/recruiterList';
import { LanguageVacancyList } from '@/components/languageVacancyList'; // Novo import
import { PaginationControls } from '@/components/paginationControls';
import { TabControls } from '@/components/tabControls'; // Novo import

import { useState, useMemo } from 'react';

// Constant to define the limit of items per page (DRY)
const ITEMS_PER_PAGE = 10;

export default function Home() {
	const [recruiterData, setRecruiterData] = useState<Recruiter[]>([]);
	const [vacancyData, setVacancyData] = useState<AppData>([]); // Assumindo LanguageVacancy[] aqui
	const [currentPage, setCurrentPage] = useState(1);
	const [activeTab, setActiveTab] = useState<TabKey>('Recruiters');

	// Mapeia a tabKey para o conjunto de dados ativo
	const activeData = activeTab === 'Recruiters' ? recruiterData : vacancyData;

	const totalPages = Math.ceil(activeData.length / ITEMS_PER_PAGE);

	// Logica para resetar a paginação ao mudar os dados ou a aba
	const handleDataLoaded = (data: AppData, dataKey: TabKey) => {
		if (dataKey === 'Recruiters') {
			setRecruiterData(data as Recruiter[]);
		} else {
			setVacancyData(data);
		}
		setCurrentPage(1);
		setActiveTab(dataKey); // Ativa a aba após o carregamento
	};

	const handleTabChange = (key: TabKey) => {
		setActiveTab(key);
		setCurrentPage(1); // Reseta a paginação ao trocar de aba
	};

	const currentDataPage = useMemo(() => {
		const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
		const endIndex = startIndex + ITEMS_PER_PAGE;
		return activeData.slice(startIndex, endIndex);
	}, [activeData, currentPage]);

	return (
		<div className='container mx-auto p-4 max-w-4xl'>
			<h1 className='text-3xl font-bold mb-6 text-center text-blue-400'>Recruiter List Manager 📋</h1>

			{/* SEÇÃO DE UPLOAD */}
			<div className='flex flex-col items-center p-4 bg-gray-900 rounded-lg mb-8'>
				<h2 className='text-xl font-semibold mb-4 text-white'>Anexar Arquivos de Planilha</h2>
				<div className='flex space-x-4'>
					<FileUploader
						onDataLoaded={(data) => handleDataLoaded(data, 'Recruiters')}
						buttonTitle='Upload: Recrutadores (LinkedIn Links)'
					/>
					<FileUploader
						onDataLoaded={(data) => handleDataLoaded(data, 'LanguageVacancies')}
						buttonTitle='Upload: Vagas por Linguagem'
					/>
				</div>
			</div>

			{/* SEÇÃO DE CONTROLE DE ABAS E CONTEÚDO */}
			{recruiterData.length > 0 || vacancyData.length > 0 ? (
				<>
					{/* Controle de Abas */}
					<TabControls
						activeTab={activeTab}
						onTabChange={handleTabChange}
						hasRecruiters={recruiterData.length > 0}
						hasVacancies={vacancyData.length > 0}
					/>

					{/* Renderização Condicional do Conteúdo */}
					{activeTab === 'Recruiters' && recruiterData.length > 0 && (
						<RecruiterList
							recruiters={currentDataPage as Recruiter[]}
							totalCount={recruiterData.length}
							currentPage={currentPage}
							itemsPerPage={ITEMS_PER_PAGE}
						/>
					)}

					{activeTab === 'LanguageVacancies' && vacancyData.length > 0 && (
						<LanguageVacancyList
							vacancies={currentDataPage}
							totalCount={vacancyData.length}
							currentPage={currentPage}
							itemsPerPage={ITEMS_PER_PAGE}
						/>
					)}

					{/* Paginação Comum */}
					{activeData.length > 0 && (
						<PaginationControls
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={setCurrentPage}
						/>
					)}
				</>
			) : (
				<div className='text-center p-10 border border-dashed border-gray-700 rounded-lg text-gray-400'>
					Faça o upload de seus arquivos CSV/Excel para começar.
				</div>
			)}
		</div>
	);
}
