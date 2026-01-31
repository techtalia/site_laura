import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import Image from "next/image";

const Sobre = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-center gap-x-8 items-end my-8">
        <Image
          src="/8.jpeg"
          alt=""
          width={150}
          height={150}
          className="rounded-full"
        />
        <div className="w-1/2 space-y-4 bg-(--verde-apagado) p-4  rounded-xl">
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
