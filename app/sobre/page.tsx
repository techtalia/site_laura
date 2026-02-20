import Image from "next/image";
import "./sobre.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laura Leal Psi - Sobre",
  description: "Psicóloga Clínica | CRP: 06/221731",
};

const Sobre = () => {
  return (
    <div className="sobre">
      {/* Header */}
      <div className="flex justify-center items-end md:my-8 mt-44 mb-8">
        <Image
          src="/8.jpeg"
          alt=""
          width={150}
          height={150}
          className="rounded-full absolute lg:left-1/4  md:left-1/8 top-0 fotoSobre "
        />
        <div className="lg:w-2/3 md:w-3/4 w-4/5  space-y-4 bg-(--verde-apagado) md:py-1 p-2 md:pl-32  rounded-xl md:text-left text-center textSobre">
          <h1 className="text-2xl font-bold">Prazer, sou a Laura </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            repellat aut consequuntur, doloremque, repellendus fugit ipsum
            pariatur quae est excepturi assumenda vel cumque voluptatibus fugiat
            deleniti porro iure nam esse?
          </p>
        </div>
      </div>

      {/* body */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-2xl font-bold">Sobre mim</h1>
        {/* <div className="grid grid-cols-2 gap-x-16 gap-y-8 w-2/3 mx-auto text-justify">
          <p className="border-r-2" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat cupiditate pariatur officia quibusdam molestiae expedita inventore a facere. Labore cupiditate soluta laudantium sapiente quaerat incidunt magni necessitatibus voluptas delectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat cupiditate pariatur officia quibusdam molestiae expedita inventore a facere. Labore cupiditate soluta laudantium sapiente quaerat incidunt magni necessitatibus voluptas delectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat cupiditate pariatur officia quibusdam molestiae expedita inventore a facere. Labore cupiditate soluta laudantium sapiente quaerat incidunt magni necessitatibus voluptas delectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat cupiditate pariatur officia quibusdam molestiae expedita inventore a facere. Labore cupiditate soluta laudantium sapiente quaerat incidunt magni necessitatibus voluptas delectus.
          </p>
        </div> */}
        <div className="multicolumn_sobre w-2/3 mx-auto text-justify">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat
            cupiditate pariatur officia quibusdam molestiae expedita inventore a
            facere. Labore cupiditate soluta laudantium sapiente quaerat
            incidunt magni necessitatibus voluptas delectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat
            cupiditate pariatur officia quibusdam molestiae expedita inventore a
            facere. Labore cupiditate soluta laudantium sapiente quaerat
            incidunt magni necessitatibus voluptas delectus.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            fugiat recusandae dolorum pariatur, magnam suscipit, assumenda,
            minima iure commodi accusamus quaerat. Rem a iste magnam quod vel,
            consequatur harum maxime.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            fugiat recusandae dolorum pariatur, magnam suscipit, assumenda,
            minima iure commodi accusamus quaerat. Rem a iste magnam quod vel,
            consequatur harum maxime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
