import Footer from '@/components/modules/layout/Footer';
import NotFoundState from '@/components/modules/empty-states/NotFoundState';

export default function NotFound() {
  return (
    <>
      <main id="main" className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <NotFoundState />
      </main>
      <Footer />
    </>
  );
}
