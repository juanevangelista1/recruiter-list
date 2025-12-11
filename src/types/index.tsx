export interface Recruiter {
	id: number;
	linkedin: string;
	nome: string;
}

export interface LanguageVacancy {
	id: number;
	[key: string]: string | number;
}

export interface RecruiterTrackingState {
	sent: boolean;
	date: Date | null;
}

export type AppData = Recruiter[] | LanguageVacancy[];

export type TabKey = 'Recruiters' | 'LanguageVacancies';
