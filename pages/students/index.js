import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import styles from '../../styles/Students.module.css';

export default function Students() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Students</title>
        <meta name="description" content="Information about our students" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Header Section */}
      <section className={styles.header}>
        <h1>Our Students</h1>
      </section>

      {/* First Year Grade Section */}
      <Link href="/students/first-year">
        <section id="first-year" className={styles.gradeSection}>
          <h2>First Year Grade</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
          <Image
            src="/images/first-year.jpg"
            alt="First Year Image"
            width={600}
            height={400}
          />
        </section>
      </Link>

      {/* Second Year Grade Section */}
      <section id="second-year" className={styles.gradeSection}>
        <h2>Second Year Grade</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
        <Image
          src="/images/second-year.jpg"
          alt="Second Year Image"
          width={600}
          height={400}
        />
      </section>

      {/* Third Year Grade Section */}
      <section id="third-year" className={styles.gradeSection}>
        <h2>Third Year Grade</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
        <Image
          src="/images/third-year.jpg"
          alt="Third Year Image"
          width={600}
          height={400}
        />
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; Your School Name 2024</p>
        <p>Prog/Ashraf Eltayb</p>
      </footer>
    </div>
  );
}
