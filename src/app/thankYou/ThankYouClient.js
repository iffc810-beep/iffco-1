'use client';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './thankyou.module.css';

export default function ThankYouClient() {
  const searchParams = useSearchParams();
  const formType = searchParams.get('type') || 'contact'; // Default to 'contact' if no type

  return (
    <section className={styles.thankyouSection}>
      <div className={styles.container}>
        <Image
          src="/logo.svg"
          alt="IFFCO Logo"
          width={150}
          height={150}
          className={styles.logo}
          priority
        />
        <h1 className={styles.title}>Thank You for Your Submission!</h1>
        <p className={styles.message}>
          {formType === 'dealer'
            ? 'Your application to become an IFFCO fertiliser dealer has been successfully submitted. Our team will review your details and get back to you soon.'
            : 'Your message has been successfully sent. We\'ll respond to your inquiry as soon as possible.'}
        </p>
        <Link href={formType === 'dealer' ? '/' : '/contact'} className={styles.button}>
          {formType === 'dealer' ? 'Return to Home' : 'Return to Contact Page'}
        </Link>
      </div>
    </section>
  );
}