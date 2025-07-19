import Nav from './components/Nav';
import Footer from './components/Footer';
import './styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  title: 'IFFCO Fertiliser Dealership',
  description: 'Join our cooperative to distribute high-quality fertilisers.',
};