import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Privacity.module.css";

import PaymentTodo from '../components/PaymentTodo';

export default function PaymentTodo() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacity Pyment Todo</title>
        <meta name="description" content="Privacity Payment Todo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <PaymentTodo />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://profile-enieber.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/logo.svg" alt="enieber Logo" width={72} height={16} />
          </span>
          Enieber
        </a>
      </footer>
    </div>
  );
}
