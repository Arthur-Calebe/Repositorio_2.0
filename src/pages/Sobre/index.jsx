import './sobre.css'

export const Sobre = () => {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre__header">
        <p className="sobre__eyebrow">Sobre</p>
        <h2>Quem sou eu</h2>
      </div>

      <div className="sobre__content">
        <p>
          Me chamo <strong>Arthur Calebe</strong>, tenho 19 anos e curso Engenharia de
          Software na IBMEC, no 3º período.
        </p>
        <p>
          Sempre fui uma pessoa curiosa por tecnologia, com interesse em desenvolvimento web,arquitetura de software e em criar experiências digitais que realmente façam a diferença para o usuário.
        </p>
        <p>
          Gosto de transformar ideias em soluções funcionais, pensadas em clareza,
          performance e usabilidade. A cada projeto, busco aprender mais, evoluir minha
          lógica e melhorar a qualidade do que entrego.
        </p>
      </div>

      <ul className="sobre__lista">
        <li>Foco em me tornar um desenvolvedor Full-Stack</li>
        <li>Interesse em React, JavaScript e Java</li>
        <li>Curiosidade por arquitetura e boas práticas</li>
        <li>Busca constante por aprendizado e evolução técnica</li>
      </ul>
    </section>
  )
}