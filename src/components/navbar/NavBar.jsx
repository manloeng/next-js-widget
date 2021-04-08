import styles from "../../../styles/Navbar.module.css";

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <a href="">Your Financial Plan</a>
        </li>
        <li>
          <a href="">Tips and Blogs</a>
        </li>
        <li>
          <button>Login</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
