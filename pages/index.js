import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fast Think</title>
        <meta name="description" content="Fast Think company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Fast Think</h1>

        <p className={styles.description}>
          Quick in thinking accurately in acting
        </p>
        <div className={styles.grid}>
          <Image
            src="/building.svg"
            alt="Personal written in notebook"
            width={400}
            height={200}
          />
        </div>
        <p className={styles.description}>This site is in development</p>
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
