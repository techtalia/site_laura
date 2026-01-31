import './navbar.css'
import Link from 'next/link'

const Navbar = () => {
  return (
        <ul className='h-[10vh] px-16 bg-(--marrom-apagado) text-white flex items-center justify-end gap-8 '>
            <li className='mr-auto'><Link href="/">Início</Link></li>
            <li><Link href="/sobre">Sobre mim</Link></li>
            <li><Link href="/abordagem">Abordagem</Link></li>
            <li><Link href="/areasDeAtendimento">Áreas de Atendimento</Link></li>
            <li><Link href="/servicos">Meus Serviços</Link></li>

        </ul>
  )
}

export default Navbar