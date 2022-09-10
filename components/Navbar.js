import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/posts"><a>Posts</a></Link>
      <Link href="/albums"><a>Albums</a></Link>
    </nav>
);
}
 
export default Navbar;