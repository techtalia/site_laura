import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import "./index.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laura Leal Psi",
  description: "Psicóloga Clínica | CRP: 06/221731",
};

const Home = () => {
  return (
    <div className="min-h-screen home">
      {/* header */}
      <div className="md:flex items-center justify-center mb-2 gap-x-8 py-8 mx-8 border-b-2 border-(--cinza)">
        {/* Logo */}
        <div className="flex justify-center divLogo">
          <LocalFloristIcon sx={{ fontSize: 120 }} />
        </div>
        <div className="text-center">
          <h1 className="text-7xl pb-4 divNome font-[cookie]">Laura Leal</h1>
          <p className="font-[andika]">Psicóloga Clínica - CRP: 06/221731</p>
          <p className="font-[andika]">Atendimento online - jovens e adultos</p>
        </div>
      </div>
      {/* main content */}
      <div className="flex home_image_div ">
        <div className="home_gradient">
          <p className="w-1/2 text-white font-bold ">
            Boas vindas!
            <br />
            Muito prazer, sou a Laura!
            <br />
            <br />
            Nesse espaço, pretendo trazer a vocês um pouco mais sobre a
            importância de pensarmos o cuidado em saúde mental e a participação
            específica - e não única - da psicoterapia nesse processo.
            <br />
            <br />
            Fazer terapia é mais do que olhar para o sofrimento, mas também
            pensar em como promover saúde e reflexão para dentro de si, num
            mundo onde tantas coisas nos alienam e nos fazem perder a capacidade
            de perceber quem somos e, mais, quem sonhamos ser.
            <br />
            <br />
            Para além de cuidar dos adoecimentos, proponho que aqui, através da
            abordagem da Psicologia Histórico Cultural, busquemos encontrar os
            sentidos para as vivências, atravessamentos, pensamentos, desejos,
            traumas e afetos, desafio que tem como horizonte a construção de
            autonomia e liberdade.
            <br />
            <br />
            Vamos?
          </p>
        </div>
        <img src="/7.jpg" alt="" className="home_image" />
      </div>

      <p className="md:hidden p-4">
        Boas vindas!
        <br />
        Muito prazer, sou a Laura!
        <br />
        <br />
        Nesse espaço, pretendo trazer a vocês um pouco mais sobre a importância
        de pensarmos o cuidado em saúde mental e a participação específica - e
        não única - da psicoterapia nesse processo.
        <br />
        <br />
        Fazer terapia é mais do que olhar para o sofrimento, mas também pensar
        em como promover saúde e reflexão para dentro de si, num mundo onde
        tantas coisas nos alienam e nos fazem perder a capacidade de perceber
        quem somos e, mais, quem sonhamos ser.
        <br />
        <br />
        Para além de cuidar dos adoecimentos, proponho que aqui, através da
        abordagem da Psicologia Histórico Cultural, busquemos encontrar os
        sentidos para as vivências, atravessamentos, pensamentos, desejos,
        traumas e afetos, desafio que tem como horizonte a construção de
        autonomia e liberdade.
        <br />
        <br />
        Vamos?
      </p>
    </div>
  );
};

export default Home;
