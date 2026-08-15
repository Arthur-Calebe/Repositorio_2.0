import './contato.css'

export const Contato = () => {
  const contatos = [
    {
      nome: 'GitHub',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      url: 'https://github.com/Arthur-Calebe',
      descricao: 'Veja meus projetos e contribuições',
    },
    {
      nome: 'LinkedIn',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg',
      url: 'www.linkedin.com/in/arthur-calebe-a411b9319',
      descricao: 'Conecte comigo profissionalmente',
    },
    {
      nome: 'Email',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-plain.svg',
      url: 'arthurcalebedev@gmail.com',
      descricao: 'Envie-me uma mensagem',
    }

  ]

  return (
    <section className="contato" id="contato">
      <div className="contato__header">
        <p className="contato__eyebrow">Contato</p>
        <h2>Vamos conversar?</h2>
      </div>

      <p className="contato__subtitle">
        Estou sempre aberto a novas oportunidades, projetos e conversas sobre tecnologia. 
        Encontre-me por aqui!
      </p>

      <div className="contato__content">
        <div className="contato__message">
          <h3>Deixe sua mensagem</h3>
          <p>
            Se tem uma oportunidade, um projeto interessante ou só quer bater um papo sobre 
            tecnologia, sinta-se livre para entrar em contato comigo através de qualquer um 
            desses canais!
          </p>
        </div>

        <div className="contato__grid">
          {contatos.map((contato) => (
            <a
              href={contato.url}
              target="_blank"
              rel="noreferrer"
              className="contato-card"
              key={contato.nome}
            >
              <div className="contato-card__icon-wrapper">
                {contato.icone.startsWith('http') ? (
                  <img 
                    src={contato.icone}
                    alt={contato.nome}
                    className="contato-card__icon"
                  />
                ) : (
                  <span className="contato-card__icon-emoji">{contato.icone}</span>
                )}
              </div>
              <h3 className="contato-card__nome">{contato.nome}</h3>
              <p className="contato-card__descricao">{contato.descricao}</p>
              <span className="contato-card__cta">Clique para conectar →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
