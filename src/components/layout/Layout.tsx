import { Helmet } from 'react-helmet';
import { APP_NAME } from '../../constants.ts';
import { FC, ReactNode } from 'react';
import { Header } from '../header';
import Footer from '../footer/Footer.tsx';

interface LayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        <title>
          {title} | {APP_NAME}
        </title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main className="mb-4">{children}</main>
      <Footer />
    </>
  );
};
