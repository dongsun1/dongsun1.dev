import Header from '../components/header';
import Footer from '../components/footer';

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="flex flex-col h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </section>
  );
}
