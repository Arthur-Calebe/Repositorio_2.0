import './skills.css'

export const Skills = () => {
  const skills = [
    {
      nome: 'Java',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
      descricao: 'Linguagem orientada a objetos, POO, Spring Boot',
      nivel: 'Intermediário',
    },
    {
      nome: 'HTML',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      descricao: 'Estrutura semântica, acessibilidade, boas práticas',
      nivel: 'Avançado',
    },
    {
      nome: 'CSS',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      descricao: 'Layouts, Flexbox, Grid, responsividade, animações',
      nivel: 'Avançado',
    },
    {
      nome: 'React',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      descricao: 'Componentes, hooks, estado, Context API',
      nivel: 'Intermediário',
    },
    {
      nome: 'JavaScript',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      descricao: 'ES6+, async/await, manipulação de DOM, eventos',
      nivel: 'Intermediário',
    },
    {
      nome: 'Git',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      descricao: 'Versionamento, commits, branches, merge',
      nivel: 'Intermediário',
    },
    {
      nome: 'GitHub',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      descricao: 'Repositórios, Pull Requests, colaboração',
      nivel: 'Intermediário',
    },
    {
      nome: 'Banco de Dados',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      descricao: 'SQL, modelagem, relacionamentos, queries',
      nivel: 'Iniciante',
    },
  ]

  return (
    <section className="skills" id="skills">
      <div className="skills__header">
        <p className="skills__eyebrow">Skills</p>
        <h2>Minhas Tecnologias</h2>
      </div>

      <p className="skills__subtitle">
        Tecnologias que venho estudando e aperfeiçoando constantemente
      </p>

      <div className="skills__grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.nome}>
            <div className="skill-card__header">
              <img 
                src={skill.icone} 
                alt={skill.nome}
                className="skill-card__icon"
              />
              <h3 className="skill-card__nome">{skill.nome}</h3>
            </div>
            <p className="skill-card__descricao">{skill.descricao}</p>
            <span className="skill-card__nivel">{skill.nivel}</span>
          </div>
        ))}
      </div>
    </section>
  )
}