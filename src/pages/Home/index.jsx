import './home.css'
import profileImage from '../../assets/meuEU1.png'

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__content">
        <p className="home__eyebrow">Software Engineer · Full-stack</p>
        <h1>
          Arthur <span>Calebe</span>
        </h1>
        <h2>
          Construindo meu caminho na tecnologia, um código de cada vez.
        </h2>
        <p className="home__description">
          Sou desenvolvedor com foco em criar produtos robustos, interfaces claras e
          experiências funcionais que unem tecnologia, usabilidade e boa arquitetura.
        </p>

        <div className="home__actions">
          <a href="#projetos" className="home__button home__button--primary">
            Ver projetos
          </a>
          <a href="#contato" className="home__button home__button--secondary">
            Falar comigo
          </a>
        </div>
      </div>

      <div className="home__visual">
        <div className="home__image-frame">
          <img src={profileImage} alt="Arthur Calebe" className="home__image" />
        </div>
      </div>
    </section>
  )
}