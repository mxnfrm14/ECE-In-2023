import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </div>
    );
  }