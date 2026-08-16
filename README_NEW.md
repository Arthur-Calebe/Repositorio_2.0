# 🚀 Portfólio Arthur Calebe

Um portfólio moderno e responsivo desenvolvido com **React** e **Vite**, apresentando projetos, skills e informações profissionais de um desenvolvedor Full Stack.

## 📋 Sobre o Projeto

Este é um portfólio digital completo que serve como vitrine para demonstrar habilidades técnicas, projetos desenvolvidos e experiências profissionais. O site foi construído com foco em **performance**, **responsividade** e **experiência do usuário**.

### ✨ Características Principais

- ⚡ **Performance otimizada** com Vite
- 📱 **Totalmente responsivo** (mobile, tablet, desktop)
- 🎨 **Design moderno e elegante** com gradientes e animações suaves
- 🧭 **Navegação suave** com scroll behavior smooth
- 📌 **Header fixo** que acompanha a rolagem da página
- ⬆️ **Botão flutuante** para voltar ao topo
- ♿ **Acessibilidade** com labels semânticas
- 🎯 **SEO amigável** com estrutura HTML semântica

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── Header/              # Componente de navegação principal
│   │   ├── index.jsx
│   │   └── header.css
│   ├── Footer/              # Rodapé do site
│   │   ├── index.jsx
│   │   └── footer.css
│   └── ScrollToTop/         # Botão flutuante para voltar ao topo
│       ├── index.jsx
│       └── scroll-to-top.css
├── pages/
│   ├── Home/               # Página inicial/hero
│   │   ├── index.jsx
│   │   └── home.css
│   ├── Sobre/              # Seção sobre o desenvolvedor
│   │   ├── index.jsx
│   │   └── sobre.css
│   ├── Projetos/           # Galeria de projetos
│   │   ├── index.jsx
│   │   └── projetos.css
│   ├── Skills/             # Habilidades técnicas
│   │   ├── index.jsx
│   │   └── skills.css
│   └── Contato/            # Formulário de contato
│       ├── index.jsx
│       └── contato.css
├── assets/                 # Imagens e recursos
├── App.jsx                 # Componente raiz
├── App.css                 # Estilos globais
└── main.jsx                # Ponto de entrada
```

## 📄 Seções do Site

### 🏠 **Home**
Seção inicial com apresentação do desenvolvedor, incluindo:
- Título e descrição profissional
- Chamada para ação (CTA) com botões
- Imagem de perfil

### 👤 **Sobre**
Informações sobre Arthur Calebe:
- Biografia profissional
- Trajetória e aprendizado
- Tecnologias conhecidas
- Objetivos e visão

### 💼 **Projetos**
Galeria com os projetos desenvolvidos:
- Descrição de cada projeto
- Tecnologias utilizadas
- Links para repositórios/live demo
- Imagens dos projetos

### 🛠️ **Skills**
Competências técnicas:
- Linguagens de programação
- Frameworks e bibliotecas
- Ferramentas e tecnologias
- Nível de proficiência

### 📧 **Contato**
Canal de comunicação:
- Formulário para contato
- Links de redes sociais
- Email de contato
- Informações de localização

## 🚀 Como Usar

### Pré-requisitos
- Node.js (v16 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre no diretório
cd Repositorio_2.0

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Crie a versão otimizada
npm run build

# Visualize a versão de produção
npm run preview
```

### Lint e Formatação

```bash
# Verifique o código com ESLint
npm run lint
```

## 🎨 Tecnologias Utilizadas

| Categoria | Tecnologia |
|-----------|-----------|
| **Frontend** | React 19.2.8 |
| **Build Tool** | Vite 8.2.0 |
| **Styling** | CSS3 (Flexbox, Grid, Gradientes) |
| **Linting** | ESLint |
| **Type Checking** | TypeScript (devDependency) |

## 🎯 Features Implementadas

✅ **Header Sticky/Fixed** - Navegação sempre visível ao rolar
✅ **Smooth Scroll** - Comportamento suave de rolagem
✅ **Scroll to Top** - Botão flutuante para voltar ao topo (aparece após 300px de scroll)
✅ **Menu Mobile** - Menu hambúrguer responsivo para dispositivos menores
✅ **Navegação Âncora** - Links que levam para diferentes seções
✅ **Responsividade** - Funciona perfeitamente em todos os tamanhos de tela
✅ **Animações** - Transições e animações suaves em toda a interface

## 📱 Responsividade

O site foi otimizado para diferentes dispositivos:

| Dispositivo | Breakpoint | Comportamento |
|------------|-----------|--------------|
| Mobile | < 480px | Menu hambúrguer ativado, padding reduzido |
| Tablet | 480px - 768px | Layout adaptado, navegação otimizada |
| Desktop | > 768px | Menu completo visível, layout completo |

### Pontos de Break principais:
- **480px** - Celulares médios/grandes
- **768px** - Tablets/dispositivos pequenos
- **1200px** - Desktop completo

## 🔧 Customização

### Alterar Cores
Edite os valores de gradientes nos arquivos CSS:
- `src/components/Header/header.css`
- `src/components/ScrollToTop/scroll-to-top.css`
- `src/pages/*/[nome].css`

### Adicionar Novas Seções
1. Crie uma nova pasta em `src/pages/NomeDaSecao/`
2. Crie os arquivos:
   - `index.jsx` (componente React)
   - `[nome].css` (estilos)
3. Importe o componente em `App.jsx`
4. Adicione um id à seção (`id="nomdasecao"`)
5. Adicione ao array de navegação no Header

Exemplo:
```jsx
// App.jsx
import { NovaSecao } from "./pages/NovaSecao"

export const App = () => {
  return (
    <main className="Principal">
      <Header />
      <section className="content-shell">
        {/* ... seções existentes ... */}
        <NovaSecao />
      </section>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
```

### Atualizar Conteúdo
Todos os textos podem ser facilmente atualizados nos componentes `.jsx` de cada seção.

## 📊 Performance

- ⚡ Build size otimizado com Vite
- 🚀 Fast Refresh para desenvolvimento rápido
- 📦 Code splitting automático
- 🎯 Lazy loading de imagens
- 🎨 CSS otimizado sem framework pesado

## 🐛 Troubleshooting

### Header não fica fixo em mobile
**Solução:** Verifique se o CSS está corretamente importado em `header.css`
- Confirme que `position: fixed` está definido
- Certifique-se de que `left: 0`, `right: 0`, `top: 0` estão presentes

### Menu não aparece ao rolar
**Solução:** 
- Certifique-se de que o `ScrollToTop` está importado em `App.jsx`
- Verifique se o CSS do componente está carregando
- Abra o DevTools e procure por erros no console

### Responsividade bugada em dispositivos específicos
**Solução:**
- Limpe o cache do navegador (Ctrl + Shift + Delete)
- Verifique os media queries em `App.css`
- Teste com `npm run build && npm run preview`

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato através das informações disponíveis na seção de Contato do site.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙌 Contribuições

Contribuições são bem-vindas! Sinta-se livre para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

## 📚 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Faz o build da versão de produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Verifica o código com ESLint |

## 🎓 Tecnologias Adicionais Conhecidas

Conforme mencionado no site, Arthur também trabalha com:
- **Java** - Programação orientada a objetos
- **Spring Boot** - Framework backend
- **APIs REST** - Integração de serviços
- **Bancos de Dados** - SQL e design de dados
- **HTML & CSS** - Estrutura e estilização
- **JavaScript** - Lógica do frontend

---

**Desenvolvido com ❤️ por Arthur Calebe**

Última atualização: 2026-08-16
