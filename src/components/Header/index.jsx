import { useState } from 'react'
import './header.css'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contato', href: '#contato' },
  ]

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="header">
      <a href="#home" className="header_logo" onClick={handleNavClick}>
        <span>Arthur</span> Calebe
      </a>

      <button
        type="button"
        className={`header__toggle ${menuOpen ? 'is-open' : ''}`}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-header ${menuOpen ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={handleNavClick}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}