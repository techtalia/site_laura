import Image from "next/image";
import "./footer.css";

const Footer = () => {
  return (
    <div className="w-full flex justify-center gap-x-20 bg-(--laranja-apagado) min-h-[15vh] items-center footer ">
      

      {/* Telefone */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="font-bold">Telefone</p>
        <p>(16) 99783-3995</p>
      </div>

      {/* Instagram */}
      <div className="flex flex-col items-center justify-center space-y-4 flex-wrap">
        <p className="font-bold">Instagram</p>
        <p>@psi.lauraleal</p>
      </div>
      
      {/* Email */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="font-bold">Email</p>
        <p>lauraleal.psi@gmail.com</p>
      </div>

      {/* Redes Sociais */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="font-bold">Redes Sociais</p>
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
