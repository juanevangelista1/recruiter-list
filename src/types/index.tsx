export interface Recruiter {
	id: number;
	linkedin: string;
	nome: string;
}

export interface RecruiterTrackingState {
	sent: boolean;
	date: Date | null;
}
