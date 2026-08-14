import './projetos.css'

export const Projetos = () => {
  const projetos = [
    {
      nome: 'Essência do Fruto - Cosméticos',
      tipo: 'E-commerce',
      descricao:
        'Loja online em desenvolvimento para venda de produtos cosméticos, com foco em experiência de compra simples encaminhando o carrinho para o WhatsApp, visual limpo e organização de catálogo.',
      link: 'https://github.com/Arthur-Calebe/EssenciaDoFruto',
      tag: 'HTML, CSS e JavaScript / Frontend',
    },
    {
      nome: 'Locadora de Veículos',
      tipo: 'Java',
      descricao:
        'Sistema em Java simulando o funcionamento de uma locadora de veículos, com lógica de cadastro, aluguel, gestão e regras de negócio do setor, utilizando todo o conhecimento que venho estudando por meio de cursos',
      link: 'https://github.com/Arthur-Calebe/LocadoraJavaPOO',
      tag: 'Java / POO',
    },
  ]

  return (
    <section className="projetos" id="projetos">
      <div className="projetos__header">
        <p className="projetos__eyebrow">Projetos</p>
        <h2>Projetos em destaque</h2>
      </div>

      <div className="projetos__grid">
        {projetos.map((projeto) => (
          <article className="projeto-card" key={projeto.nome}>
            <span className="projeto-card__tag">{projeto.tag}</span>
            <h3>{projeto.nome}</h3>
            <p className="projeto-card__tipo">{projeto.tipo}</p>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noreferrer">
              Ver repositório
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}