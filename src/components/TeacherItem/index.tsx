import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          alt="Cherry"
          src="https://avatars3.githubusercontent.com/u/43519162?v=4"
        />
        <div>
          <strong>Cherry</strong>
          <span>História</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img alt="Whatsapp" src={whatsappIcon} />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
