import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import "./index.css";


const Home = () => {
  return (
      <div className="min-h-screen home">
        {/* header */}
        <div className="flex items-center justify-center mb-2 gap-x-8 py-8 mx-8 border-b-2 border-(--cinza)">
          {/* Logo */}
          <div>
            <LocalFloristIcon sx={{ fontSize: 120 }} />
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold font-serif pb-4 divNome">
              Laura Leal
            </h1>
            <p >
              Psicóloga Clínica - CRP: 06/221731
            </p>
            <p>Atendimento online - jovens e adultos</p>
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
      </div>
  );
};

export default Home;
