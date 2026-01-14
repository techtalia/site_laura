import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="w-full flex justify-between px-80 bg-blue-400 h-20 ">
      {/* Logo */}
      <div>Logo</div>

      {/* Telefone */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <p>Telefone</p>
        <p>(XX) XXXXX-XXXX</p>
      </div>

      {/* Email */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <p>Email</p>
        <p>teste@teste.com</p>
      </div>

      {/* Redes Sociais */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <p>Redes Sociais</p>
        <div className="flex gap-4">
          <a href="https://wa.me/5516997833995" target="_blank">
<img src="/whatsapp.svg" alt="Contato por Whatsapp" height="30px" width="30px"/>
          </a>
          <a href="https://www.instagram.com/psi.lauraleal/" target="_blank" >
            <img src="instagram.svg" alt="Contato por Instagram" height="30px" width="30px"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
