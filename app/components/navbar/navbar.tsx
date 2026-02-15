'use client'
import './navbar.css'
import Link from 'next/link'

const Navbar = () => {
  const toggleMenu = () => {
    const menuLateral = document.querySelector('.menuLateral');
    const menuBurguer = document.querySelector('.menuBurguer');
    if (menuLateral) {
      menuLateral.classList.toggle('active');
    }
    if (menuBurguer) {
      menuBurguer.classList.toggle('active');
    }
    
  }
  return (
    <nav className='flex h-[10vh] px-16 bg-(--marrom-apagado) items-center w-screen justify-between text-white'>
          <Link href="/">Início</Link>
          <div className='menuBurguer' onClick={toggleMenu}>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
          </div>

        <ul className='flex gap-8 menuLateral '>
            <li><Link href="/sobre" onClick={toggleMenu}>Sobre mim</Link></li>
            <li><Link href="/abordagem" onClick={toggleMenu}>Abordagem</Link></li>
            <li><Link href="/areasDeAtendimento" onClick={toggleMenu}>Áreas de Atendimento</Link></li>
            <li><Link href="/servicos" onClick={toggleMenu}>Meus Serviços</Link></li>

        </ul>

    </nav>
  )
}

export default Navbar