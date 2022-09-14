import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <Link href="/users"><a>Users</a></Link> 
      <Link href="/posts"><a>Posts</a></Link>
    </nav>
);
}
 
export default Navbar;