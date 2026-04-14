import styles from "./Header.module.css";
import line23 from "../../../src/assets/Line23.svg";
import NavLink from "../../pages/navLink/NavLink";
const Header = () => {
    return(
        
        <div className={styles["header-main"]}>
            <div className={styles["header-top"]}>
            <div className={styles["header-logo"]}>
                <h1>EKSPRESS@MAIL.COM</h1>
                <img src={line23} alt="" />
                <p>+1(333) 000-0000</p>
            </div>
            <button>Get Quote</button>
            </div>

            <div className={styles["header-navLink"]}>
             <NavLink />
            </div>
        </div>  
       
    )
}

export default Header;