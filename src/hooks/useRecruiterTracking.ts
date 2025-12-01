import { useState, useEffect } from 'react';
import { RecruiterTrackingState } from '@/types';

export function useRecruiterTracking(recruiterLink: string): [RecruiterTrackingState, () => void] {
	const storageKey = `recruiter_${recruiterLink}`;
	const [trackingState, setTrackingState] = useState<RecruiterTrackingState>({
		sent: false,
		date: null,
	});

	useEffect(() => {
		const storedData = localStorage.getItem(storageKey);
		if (storedData) {
			try {
				const parsed = JSON.parse(storedData);
				if (parsed.sent && parsed.date) {
					setTrackingState({ sent: true, date: new Date(parsed.date) });
				}
			} catch (error) {
				console.error('Erro ao ler dados de rastreamento do localStorage:', error);
			}
		}
	}, [storageKey]);

	const markAsSent = () => {
		const now = new Date();
		const newState = { sent: true, date: now };
		setTrackingState(newState);
		localStorage.setItem(storageKey, JSON.stringify({ sent: true, date: now.toISOString() }));
	};

	return [trackingState, markAsSent];
}
