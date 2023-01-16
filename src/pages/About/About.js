import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Blog <span>React</span>
        <p>
          Este projeto consiste em um blog feito com React Js no Front-End e
          Firebase no Back-End
        </p>
        <Link to="/posts/create" className="btn">
          Criar Post
        </Link>
      </h2>
    </div>
  );
};

export default About;
