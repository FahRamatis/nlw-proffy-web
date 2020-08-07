import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img alt="Proffy" src={logoImg} />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          className="hero-image"
          alt="Plataforma de estudos"
          src={landingImg}
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img alt="Estudar" src={studyIcon} />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img alt="Estudar" src={giveClassesIcon} />
            Dar aulas
          </Link>
        </div>
        <span className="total-connections">
          Total de 200 conexoes ja realizadas
          <img alt="Coracao roxo" src={purpleHeartIcon} />
        </span>
      </div>
    </div>
  );
};

export default Landing;
