"use client";

import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import FilterVintageIcon from '@mui/icons-material/FilterVintage';

const Servicos = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-center mt-8 ">
        <h1 className="text-2xl font-bold text-center bg-(--verde-apagado) py-4 px-4 rounded-xl w-fit">
          Meus Serviços
        </h1>
      </div>
      {/* Serviços */}
      <div className="flex justify-center gap-12 mb-12">
      <div className="border border-black rounded-lg p-4 mt-24 w-1/3">
        <LocalFloristIcon sx={{ bgcolor: "var(--laranja-apagado)", borderRadius: "50%", height: 50, width: 50, position: "relative", top: -35, left: "50%", transform: "translateX(-50%)", }} />
        <h2 className="text-xl font-bold text-center mb-2">Psicoterapia Online</h2>
        <p className="text-center">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod. Sed, quia! lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quod. Sed, quia!lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, quod. Sed, quia!lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quod. Sed, quia!
        </p>
        <button
          className="bg-(--laranja) text-white px-4 py-2 rounded-lg mt-4 mx-auto flex hover:cursor-pointer hover:bg-(--laranja-apagado)"
          onClick={() =>
            window.open("https://www.instagram.com/psi.lauraleal/", "_blank")
          }
        >
          Mais informações
        </button>
      </div>

      <div className="border border-black rounded-lg p-4 mt-24 w-1/3">
        <FilterVintageIcon sx={{ bgcolor: "var(--laranja-apagado)", borderRadius: "50%", height: 50, width: 50, position: "relative", top: -35, left: "50%", transform: "translateX(-50%)", }} />
        <h2 className="text-xl font-bold text-center mb-2">Grupo Terapêutico</h2>
        <p className="text-center">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod. Sed, quia! lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quod. Sed, quia!lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, quod. Sed, quia!lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quod. Sed, quia!
        </p>
        <button
          className="bg-(--laranja) text-white px-4 py-2 rounded-lg mt-4 mx-auto flex hover:cursor-pointer hover:bg-(--laranja-apagado)"
          onClick={() =>
            window.open("https://www.instagram.com/psi.lauraleal/", "_blank")
          }
        >
          Mais informações
        </button>
      </div>
      </div>
    </div>
  );
};

export default Servicos;
