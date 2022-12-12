import Header from '../components/header';
import Footer from '../components/footer';

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full justify-between" style={{ minHeight: '100vh' }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
