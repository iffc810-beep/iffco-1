// app/thankyou/page.jsx
'use client';

import { useSearchParams } from 'next/navigation';
import styles from './thankyou.module.css';
import Image from 'next/image';
import Link from 'next/link';

const ThankYouPage = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  let message = "Thank you for your submission!";
  if (type === 'contact') {
    message = "Thank you for contacting us. We'll get back to you soon.";
  } else if (type === 'apply') {
    message = "Your application has been received. Our team will contact you shortly.";
  } else if (type === 'subscribe') {
    message = "You're successfully subscribed to our newsletter!";
  }

  return (
    <section className={styles.thankyouSection}>
      <div className={styles.container}>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={150}
          height={150}
          className={styles.logo}
        />
        <h1 className={styles.title}>Thank You!</h1>
        <p className={styles.message}>{message}</p>
        <Link href="/" className={styles.button}>Go to Homepage</Link>
      </div>
    </section>
  );
};

export default ThankYouPage;
