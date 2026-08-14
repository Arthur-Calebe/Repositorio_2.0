import './header.css'
export const Header = () => {
  return (
    <header className="header">

        <a href="#hero" className="header_logo"><span>Arthur</span> Calebe</a>

      <nav className='nav-header'>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#skills">Skills</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  )
}