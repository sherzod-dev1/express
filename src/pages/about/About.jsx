import styles from "./About.module.css";
import img647 from "../../../src/assets/647.png";
import line23 from "../../../src/assets/Line23.svg";


const About = () => {
    return(
        <div className={styles["about-main"]}>

            <div className={styles["about"]}>
                <div className={styles["about-left"]}>
                <h2>ABOUT US</h2>
                <h1>Empowering Your Business with Tailored Logistics Solutions</h1>
                <p>At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. With years of experience and a team of experts, we are dedicated to empowering your business with seamless shipping experiences.</p>
                <button>LAERN MORE</button>
            </div>
            <div className={styles["about-right"]}>
                <img src={img647} alt="" />
            </div>
            </div>

            <div className={styles["box-main"]}>
                <div className={styles["boxOne"]}>
                     <h2>01</h2>
                    <span><img src={line23} alt="" /></span>
                    <h1>Expertise and <br />Experience</h1>
                </div>
                <div className={styles["boxOne"]}>
                      <h2>02</h2>
                    <span><img src={line23} alt="" /></span>
                    <h1>Committed to <br />Quality</h1>
                </div>
                <div className={styles["boxOne"]}>
                     <h2>03</h2>
                    <span><img src={line23} alt="" /></span>
                    <h1>Comprehensive <br /> Services</h1>
                </div>
            </div>
        </div>
    )
}
export default About;