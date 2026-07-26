import { redirect } from 'next/navigation';

// /venue بدون شناسه تالار معنایی ندارد، پس کاربر را به لیست همه تالارها هدایت می‌کنیم.
export default function VenueIndexPage() {
  redirect('/category/all');
}
