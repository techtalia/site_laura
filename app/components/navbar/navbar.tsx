import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
        <ul className='h-16 px-16 bg-red-300 flex items-center justify-end gap-8 '>
            <li className='mr-auto'><a href="#">Início</a></li>
            <li><a href="#">Sobre mim</a></li>
            <li><a href="#">Abordagem</a></li>
            <li><a href="#">Especialidades</a></li>
            <li><a href="#">Indicações de Livros</a></li>

        </ul>
  )
}

export default Navbar