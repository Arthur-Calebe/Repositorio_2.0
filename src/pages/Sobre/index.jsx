import './sobre.css'

export const Sobre = () => {

  return (
    <section className="sobre" id="sobre">
      <div className="sobre__header">
        <p className="sobre__eyebrow">Sobre</p>
        <h2>Quem sou eu</h2>
      </div>

      <div className="sobre__intro">
        <p className="sobre__intro-text">
          Sou <span className="sobre__highlight">Engenheiro de Software em formação no IBMEC-RJ</span> com foco em desenvolvimento Full Stack. Tenho construído minha base em Java, React, JavaScript, HTML e CSS, desenvolvendo projetos para colocar em prática meus conhecimentos. Atualmente, venho aprofundando meus estudos em back-end, orientação a objetos, APIs, bancos de dados e Spring Boot. Gosto de entender como as aplicações funcionam por trás das interfaces e estou sempre buscando evoluir minhas habilidades, transformar ideias em projetos e me preparar para os próximos desafios da área de tecnologia.
        </p>
      </div>

      <div className="sobre__sections">
        <div className="sobre__section">
          <div className="sobre__section-header">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              alt="Jornada"
              className="sobre__section-icon"
            />
            <h3 className="sobre__section-title">Jornada</h3>
          </div>
          <p className="sobre__section-text">
            Tenho construído minha base em <strong>Java, React, JavaScript, HTML e CSS</strong>, desenvolvendo projetos para colocar em prática meus conhecimentos. Cada projeto é uma oportunidade de aprender e evoluir
          </p>
        </div>

        <div className="sobre__section">
          <div className="sobre__section-header">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="Foco Atual"
              className="sobre__section-icon"
            />
            <h3 className="sobre__section-title">Foco Atual</h3>
          </div>
          <p className="sobre__section-text">
            Atualmente aprofundo meus estudos em <strong>back-end, orientação a objetos, APIs, bancos de dados e Spring Boot</strong>. Quero entender não apenas como construir, mas como construir bem.
          </p>
        </div>

        <div className="sobre__section">
          <div className="sobre__section-header">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              alt="Objetivos"
              className="sobre__section-icon"
            />
            <h3 className="sobre__section-title">Objetivos</h3>
          </div>
          <p className="sobre__section-text">
            Busco constante evolução técnica, transformando ideias em projetos concretos e me preparando para os próximos desafios. Quero criar impacto através da tecnologia.
          </p>
        </div>
      </div>

    </section>
  )
}