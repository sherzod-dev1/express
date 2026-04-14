import styles from "./Service.module.css";
import serviceBox from "../../../src/assets/service-box.png"

function Service() {
  return (
    <div className={styles["service-main"]}>
        <div className={styles["service-title"]}>
            <h2>Our Services</h2>
            <h1>Efficient and Reliable Shipping <br /> with FastGo</h1>
        </div>
        <div className={styles["service-box"]}>

            <div className={styles["box-service"]}>
                <img src={serviceBox} alt="" />
                <h1>Ocean Shipping</h1>
                <p>At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
            </div>

            <div className={styles["box-service"]}>
                <img src={serviceBox} alt="" />
                <h1>Air Shipping</h1>
                <p>At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
            </div>

            <div className={styles["box-service"]}>
                <img src={serviceBox} alt="" />
                <h1>Truck Shipping</h1>
                <p>At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
            </div>

            <div className={styles["box-service"]}>
                <img src={serviceBox} alt="" />
                <h1>Custom Clearance</h1>
                <p>At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
            </div>

            <div className={styles["box-service"]}>
                <img src={serviceBox} alt="" />
                <h1>Freight Forwarding</h1>
                <p>At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
            </div>

            <div className={styles["box-service"]}>
                <img src={serviceBox} alt="" />
                <h1>Insurance</h1>
                <p>At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
            </div>

        </div>
    </div>
  )
}

export default Service;