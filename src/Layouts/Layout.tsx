import { ReactNode } from 'react';
import Header from './Header';
import Providers from '../redux/provider';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<Providers>
			<Header />
			<main className="max-w-5xl px-8 mx-auto">{children}</main>
		</Providers>
	);
};

export default Layout;
