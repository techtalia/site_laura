import "./areasDeAtendimento.css";
import { Metadata } from "next";
import tree3 from "../../public/tree3.png";
import tree2 from "../../public/tree2.png";
import tree1 from "../../public/tree1.png"; 

import Image from "next/image";

export const metadata: Metadata = {
  title: "Laura Leal Psi - Áreas de Atendimento",
  description: "Psicóloga Clínica | CRP: 06/221731",
};

const AreasDeAtendimento = () => {
  const areas = [
    "Área 1",
    "Área 2",
    "Área 3",
    "Área 4",
    "Área 5",
    "Área 6",
    "Área 7",
    "Área 8",
    "Área 9",
  ];

  const icons = [tree1, tree2, tree3];
  return (
    <div className="areasDeAtendimento">
      {/* Header */}
      <div className="flex justify-center mt-8 ">
        <h1 className="text-3xl font-bold font-[Tangerine] text-center bg-(--verde-apagado)  py-4 px-4 rounded-xl w-fit">
          Áreas de Atendimento
        </h1>
      </div>
      {/* Icons */}


      <div className="flex justify-center flex-wrap lg:gap-x-36 md:gap-x-24 gap-x-12 gap-y-16 xl:w-2/3 lg:w-3/4 w-4/5 mx-auto my-12 divIcons ">
        {areas.map((area, index) => (
          <div key={index}>
            {icons && <Image src={icons[index % icons.length]} alt="tree" width={80} height={80} />}

            <p className="text-center">{area}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreasDeAtendimento;
