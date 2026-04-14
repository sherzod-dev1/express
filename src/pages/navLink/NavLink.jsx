import styles from "./NavLink.module.css";
import { Link } from "react-scroll";

const NavLink = () => {
    return(
        <div className={styles["NavLink"]}>
       <h1>Ekspress</h1>
       <div className={styles["Nav-link"]}>
         <nav>
        <ul>
          <li>
            <Link to="home">HOME</Link>
          </li>
          <li>
            <Link to="abuotUs" >ABOUT US</Link>
          </li>
          <li>
            <Link to="services" >SERVICES</Link>
          </li>
          <li>
            <Link to="contactUs" >CONTACT US</Link>
          </li>
          <li>
            <Link to="blog" >BLOG</Link>
          </li>
        </ul>
      </nav>
       </div>
        </div>
    )
}

export default NavLink;