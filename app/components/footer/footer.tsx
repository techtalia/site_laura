import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full flex justify-center gap-x-20 bg-(--laranja-apagado) h-[15vh] items-center  ">
      {/* Logo */}
      <div>Logo</div>

      {/* Telefone */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <p>Telefone</p>
        <p>(16) 99783-3995</p>
      </div>

      {/* Instagram */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <p>Instagram</p>
        <p>@psi.lauraleal</p>
      </div>
      
      {/* Email */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <p>Email</p>
        <p>lauraleal.psi@gmail.com</p>
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
              className="hover:bg-(--marrom-apagado) rounded-xl"
            />
          </a>
          <a href="https://www.instagram.com/psi.lauraleal/" target="_blank">
            <Image
              src="/instagram.svg"
              alt="Contato por Instagram"
              height={30}
              width={30}
              className="hover:bg-(--marrom-apagado) rounded-lg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
