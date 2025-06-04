import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Recruiter List - Gerenciador de Links do LinkedIn',
	description:
		'Ferramenta para extrair e gerenciar links de recrutadores do LinkedIn a partir de arquivos CSV. Organize seus contatos de forma eficiente.',
	keywords: 'recrutadores, linkedin, csv, gerenciador de links, recrutamento, networking',
	authors: [{ name: 'Recruiter List' }],
	creator: 'Recruiter List',
	publisher: 'Recruiter List',
	robots: 'index, follow',
	openGraph: {
		type: 'website',
		locale: 'pt_BR',
		url: 'https://recruiter-list.vercel.app',
		title: 'Recruiter List - Gerenciador de Links do LinkedIn',
		description:
			'Ferramenta para extrair e gerenciar links de recrutadores do LinkedIn a partir de arquivos CSV. Organize seus contatos de forma eficiente.',
		siteName: 'Recruiter List',
	},
	viewport: 'width=device-width, initial-scale=1',
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
