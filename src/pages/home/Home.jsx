import styles from "./Home.module.css";
import man from "../../../src/assets/man.png";
import line23 from "../../../src/assets/Line23.svg";

const Home = () => {
  return (
    <div className={styles["home-main"]}>
      <h2>we are best logistic company</h2>
      <h1>
        Streamline Your Shipping with <br />
        Our Cargo Services
      </h1>
      <p>
        Simplify your shipping process and make it more efficient with our{" "}
        <br />
        cargo services. From start to finish, we'll handle everything to ensure{" "}
        <br /> your cargo arrives safely.
      </p>
      <div className={styles["home-experience"]}>
        <div className={styles["experience"]}>
          <img src={man} alt="" className={styles["manImg"]} />
          <h1>
            26 K <br /><span>Satisfied Clients</span>
          </h1>
          <img src={line23} alt="" className={styles["lineHome"]}/>
          <h1>
            12 + <br /><span>Years of Experience</span>
          </h1>
        </div>
        <div class={styles["tracking-container"]}>
    <form class={styles["tracking-form"]}>
    <div class={styles["tabs"]}>
      <button type="button" class={styles["tab"]}>TRACKING</button>
      <button type="button" class={styles["tab"]}>RATE & SHIP</button>
      </div>

    <div class={styles["content-box"]}>
      <div class={styles["input-row"]}>
        <input type="text" placeholder={styles["TRACKING ID"]} required />
        <button type="submit" class={styles["track-btn"]}>TRACK</button>
      </div>
      
      <p class={styles["help-text"]}>
        See the tracking id on shipping document. <a href="#">Help</a>
      </p>
    </div>
  </form>
        </div>

      </div>
    </div>
  );
};

export default Home;
