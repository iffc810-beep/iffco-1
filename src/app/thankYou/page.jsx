// app/thankyou/page.jsx
import { Suspense } from 'react';
import ThankYouClient from './ThankYouClient';

export const dynamic = 'force-dynamic'; // Force runtime rendering to allow useSearchParams

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouClient />
    </Suspense>
  );
}
