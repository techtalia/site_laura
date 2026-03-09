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
            <h1 className="text-7xl pb-4 divNome font-[cookie]">
              Laura Leal
            </h1>
            <p className="font-[andika]">
              Psicóloga Clínica - CRP: 06/221731
            </p>
            <p className="font-[andika]">Atendimento online - jovens e adultos</p>
          </div>

          
        </div >
        {/* main content */}
          <div className="flex home_image_div ">
          <div className="home_gradient">
            <p className="w-1/2 text-white font-bold ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, delectus. Ipsum quasi quaerat fuga ad ut dolore error minima sint nihil consectetur eveniet reprehenderit ipsam, in quas enim maiores natus.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, delectus. Ipsum quasi quaerat fuga ad ut dolore error minima sint nihil consectetur eveniet reprehenderit ipsam, in quas enim maiores natus.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, delectus. Ipsum quasi quaerat fuga ad ut dolore error minima sint nihil consectetur eveniet reprehenderit ipsam, in quas enim maiores natus.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, delectus. Ipsum quasi quaerat fuga ad ut dolore error minima sint nihil
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, delectus. Ipsum quasi quaerat fuga ad ut dolore error minima sint nihil consectetur eveniet reprehenderit ipsam, in quas enim maiores natus.
              
            </p>
            </div>
          <img src="/7.jpg" alt="" className="home_image" />
          </div>

          <p className="md:hidden p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, delectus. Ipsum quasi quaerat fuga ad ut dolore error minima sint nihil consectetur eveniet reprehenderit ipsam, in quas enim maiores natus.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, delectus. Ipsum quasi quaerat fuga ad ut dolore error minima sint nihil consectetur eveniet reprehenderit ipsam, in quas enim maiores natus.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, delectus. Ipsum quasi quaerat fuga ad ut dolore error minima sint nihil consectetur eveniet reprehenderit ipsam, in quas enim maiores natus.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, delectus. Ipsum quasi quaerat fuga ad ut dolore error minima sint nihil
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, delectus. Ipsum quasi quaerat fuga ad ut dolore error minima sint nihil consectetur eveniet reprehenderit ipsam, in quas enim maiores natus.
              
            </p>
      </div>
  );
};

export default Home;
