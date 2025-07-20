import styles from './thankyou.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function ThankYouPage() {
  return (
    <div className={styles.thankyouSection}>
      <div className={styles.container}>
        <Image src="/logo.svg" alt="Logo" className={styles.logo} width={100} height={100} />
        <h1 className={styles.title}>Thank You!</h1>
        <p className={styles.message}>
          We appreciate you contacting us.One of our team members will get back to you shortly.
        </p>
        <Link href="/" className={styles.button}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
