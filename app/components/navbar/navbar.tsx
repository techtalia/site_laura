"use client";
import "./navbar.css";
import Link from "next/link";


const Navbar = () => {
  const toggleMenu = () => {
    const menuLateral = document.querySelector(".menuLateral");
    const menuBurguerButton = document.querySelector(".menuBurguerButton");
    if (menuLateral) {
      menuLateral.classList.toggle("active");
    }
    if (menuBurguerButton) {
      menuBurguerButton.classList.toggle("active");
    }
  };

  const closeMenu = () => {
    const menuLateral = document.querySelector(".menuLateral");
    menuLateral?.classList.remove("active");
    const menuBurguerButton = document.querySelector(".menuBurguerButton");
    menuBurguerButton?.classList.remove("active");
  }
  return (
    <nav className="flex h-[10vh] px-16 bg-linear-to-r from-(--laranja) from-40% to-(--marrom) to-90% items-center w-screen justify-between text-white">
      <Link href="/"  onClick={closeMenu} className="hover:text-(--cinza)">Início</Link>
      <button className="menuBurguerButton" onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>

      <ul className="flex gap-8 menuLateral " id="menuLateral">
        <li >
          <Link href="/sobre" onClick={toggleMenu}>
            Sobre mim
          </Link>
        </li>
        <li>
          <Link href="/abordagem" onClick={toggleMenu}>
            Abordagem
          </Link>
        </li>
        <li>
          <Link href="/areasDeAtendimento" onClick={toggleMenu}>
            Áreas de Atendimento
          </Link>
        </li>
        <li>
          <Link href="/servicos" onClick={toggleMenu}>
            Meus Serviços
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
