import { Home, Search } from 'lucide-react';
import Footer from '@/components/modules/layout/Footer';
import NotFoundState from '@/components/modules/empty-states/NotFoundState';

export default function VenueNotFound() {
  return (
    <>
      <main id="main" className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <NotFoundState
          title="این تالار پیدا نشد"
          description="ممکن است این تالار حذف شده یا آدرسش تغییر کرده باشد. می‌توانید بقیه تالارها را ببینید."
          actions={[
            { label: 'بازگشت به خانه', href: '/', icon: Home },
            { label: 'مشاهده همه تالارها', href: '/category/all', variant: 'secondary', icon: Search },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
