import { Suspense } from 'react';
import ThankYouClient from './ThankYouClient';

export const dynamic = 'force-dynamic';

export default function ThankYou() {
  return (
    <Suspense fallback={
      <section className="thankyouSection">
        <div className="container">
          <h1>Loading...</h1>
        </div>
      </section>
    }>
      <ThankYouClient />
    </Suspense>
  );
}