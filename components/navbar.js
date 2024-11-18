import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="#third-year">الصف الثالث </Link>
        </li>
        <li>
          <Link href="#second-year">الصف الثاني</Link>
        </li>
        <li>
          <Link href="#first-year">الصف الأول</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
