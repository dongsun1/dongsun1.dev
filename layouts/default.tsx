import Header from '../components/header';
import Footer from '../components/footer';

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen h-full justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
