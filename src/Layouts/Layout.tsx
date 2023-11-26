import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<main className="max-w-5xl px-8 mx-auto">{children}</main>
		</>
	);
};

export default Layout;
