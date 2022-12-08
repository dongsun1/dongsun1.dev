import Header from '../components/header';
import Footer from '../components/footer';

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
