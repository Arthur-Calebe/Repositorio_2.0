import './projetos.css'

export const Projetos = () => {
  const projetos = [
    {
      nome: 'Essência do Fruto - Cosméticos',
      tipo: 'E-commerce',
      descricao:
        'Loja online em desenvolvimento para venda de produtos cosméticos, com foco em experiência de compra simples encaminhando o carrinho para o WhatsApp, visual limpo e organização de catálogo.',
      link: 'https://github.com/Arthur-Calebe/EssenciaDoFruto',
      tag: 'HTML / CSS / JavaScript',
    },
    {
      nome: 'Locadora de Veículos',
      tipo: 'Java',
      descricao:
        'Sistema em Java simulando o funcionamento de uma locadora de veículos, com lógica de cadastro, aluguel, gestão e regras de negócio do setor, utilizando todo o conhecimento que venho estudando por meio de cursos',
      link: 'https://github.com/Arthur-Calebe/LocadoraJavaPOO',
      tag: 'Java / POO',
    },
    {
      nome: 'Associação dos Conselheiros do Brasil - ACB',
      tipo: 'JavaScript e React',
      descricao:
        'Atuei, junto ao meu time, na refatoração completa do site da Associação dos Conselheiros do Brasil, modernizando a interface e melhorando a estrutura da aplicação..',
      link: 'https://github.com/Arthur-Calebe/LocadoraJavaPOO',
      tag: 'React',
    }
  ]

  return (
    <section className="projetos" id="projetos">
      <div className="projetos__header">
        <p className="projetos__eyebrow">Projetos</p>
        <h2>Projetos em destaque</h2>
      </div>

      <p className="projetos__subtitle">
        Alguns dos projetos que venho desenvolvendo para aprimorar minhas habilidades
      </p>

      <div className="projetos__grid">
        {projetos.map((projeto) => (
          <article className="projeto-card" key={projeto.nome}>
            <div className="projeto-card__header">
              <span className="projeto-card__tag">{projeto.tag}</span>
              <span className="projeto-card__tipo">{projeto.tipo}</span>
            </div>
            
            <div className="projeto-card__body">
              <h3 className="projeto-card__nome">{projeto.nome}</h3>
              <p className="projeto-card__descricao">{projeto.descricao}</p>
            </div>
            
            <a href={projeto.link} target="_blank" rel="noreferrer" className="projeto-card__link">
              <span>Ver repositório</span>
              <span className="projeto-card__arrow">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}