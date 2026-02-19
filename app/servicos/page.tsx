import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import "./servicos.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laura Leal Psi - Serviços",
  description: "Psicóloga Clínica | CRP: 06/221731",
};

const Servicos = () => {
  return (
    <div className="servicos">
      {/* Header */}
      <div className="flex justify-center mt-8 ">
        <h1 className="text-2xl font-bold text-center bg-(--verde-apagado) py-4 px-4 rounded-xl w-fit">
          Meus Serviços
        </h1>
      </div>
      {/* Serviços */}
      <div className="lg:flex lg:justify-center lg:gap-12 lg:mb-12 divServicos">
        <div className="border border-black rounded-lg p-4 mt-24 w-1/3 bg-(--almond) divServicos1">
          <LocalFloristIcon
            sx={{
              bgcolor: "var(--laranja-apagado)",
              borderRadius: "50%",
              height: 50,
              width: 50,
              position: "relative",
              top: -35,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <h2 className="text-xl font-bold text-center mb-2">
            Psicoterapia Online
          </h2>
          <p className="text-center">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. Sed, quia! lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quod. Sed, quia!lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quod. Sed, quia!lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam, quod. Sed,
            quia!
          </p>
          <div className="flex justify-center w-full">
            <a
              target="_blank"
              href="https://www.instagram.com/psi.lauraleal/"
              rel="noopener noreferrer"
              className="w-fit mt-4 rounded-lg"
            >
              <button className="w-fit bg-(--laranja) text-white px-4 py-2 rounded-lg mx-auto flex hover:cursor-pointer hover:bg-(--laranja-apagado)">
                Mais informações
              </button>
            </a>
          </div>
        </div>

        <div className="border border-black rounded-lg p-4 mt-24 w-1/3 bg-(--almond) divServicos2">
          <FilterVintageIcon
            sx={{
              bgcolor: "var(--laranja-apagado)",
              borderRadius: "50%",
              height: 50,
              width: 50,
              position: "relative",
              top: -35,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <h2 className="text-xl font-bold text-center mb-2">
            Grupo Terapêutico
          </h2>
          <p className="text-center">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. Sed, quia! lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quod. Sed, quia!lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quod. Sed, quia!lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam, quod. Sed,
            quia!
          </p>
          <div className="flex justify-center w-full">
            <a
              target="_blank"
              href="https://www.instagram.com/psi.lauraleal/"
              rel="noopener noreferrer"
              className="w-fit mt-4 rounded-lg"
            >
              <button className="w-fit bg-(--laranja) text-white px-4 py-2 rounded-lg mx-auto flex hover:cursor-pointer hover:bg-(--laranja-apagado)">
                Mais informações
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
