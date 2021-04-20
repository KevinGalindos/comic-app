import LogoGithub from "./../../assets/img/github-logo.svg";
import LogoMasiv from "./../../assets/img/Logo-Masiv.png";

import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="enterprise-info">
        <a href="https://masiv.com/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={LogoMasiv} alt="Masiv.com" /> ©2021 Masivian. Todos los
          derechos reservados.{" "}
        </a>
      </div>
      <div className="personal-info">
        <a
          href="https://github.com/KevinGalindos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desarrollado por Kevin Galindo
          <img src={LogoGithub} alt="GithubPersonal" />
        </a>
      </div>
    </div>
  );
};
