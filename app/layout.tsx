import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Moe Kyaw Aung — Supreme Digital God',
  description: 'Senior Android / KMP Engineer | Creator of 111+ Public Repositories | Supreme Digital God',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050505] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
