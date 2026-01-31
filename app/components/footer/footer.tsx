import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full flex justify-center gap-x-20 bg-(--laranja-apagado) h-[10vh] ">
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
            <Image
              src="/whatsapp.svg"
              alt="Contato por Whatsapp"
              height={30}
              width={30}
            />
          </a>
          <a href="https://www.instagram.com/psi.lauraleal/" target="_blank">
            <Image
              src="/instagram.svg"
              alt="Contato por Instagram"
              height={30}
              width={30}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
