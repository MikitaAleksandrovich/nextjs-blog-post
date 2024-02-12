import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/mikita.png"
          alt="An image showing Mikita"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Mikita</h1>
      <p>
        I blog about web developement - especially frontend frameworks like
        Angular or React
      </p>
    </section>
  );
};

export default Hero;
