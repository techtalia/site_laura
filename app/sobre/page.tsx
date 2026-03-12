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
          <h1 className="text-3xl font-bold font-[Tangerine]">
            Muito prazer, sou a Laura!{" "}
          </h1>
          <p>
            Me formei em Psicologia pela Universidade Federal de São Paulo
            (UNIFESP), em Santos, onde moro atualmente. Também faço
            pós-graduação em Clínica Histórico Cultural pelo Instituto Lev
            Histórico-Cultural. Mas meu percurso não se iniciou na faculdade.
          </p>
        </div>
      </div>

      {/* body */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold font-[Tangerine]">
          Do interior do estado de São Paulo (São Carlos),
        </h1>

        <div className="multicolumn_sobre w-3/4 mx-auto text-justify">
          <p className="mb-4">
            Eu aprendi ainda pequena a conversar e debater sobre tudo,
            questionar e não naturalizar o que acontecia no mundo, muito menos o
            como isso afetava os nossos sentimentos.
          </p>
          <p className="mb-4">
            Como a grande sonhadora que fui me tornando, a construção de uma
            realidade permeada pela equidade, saúde e cuidado me marcou e
            constituiu. Assim, fui me estabelecendo com aprendizados que
            construíram e seguem construindo quem sou hoje. É daí que se iniciou
            o processo que me acompanhou também na faculdade de psicologia.
          </p>
          <p className="mb-4">
            Durante minha formação acadêmica, passei por muitos interesses. Me
            aproximei da concepção de que o profissional da saúde deve promover
            saúde para além de olhar a doença e também me apaixonei pela ideia
            de que o papel do psicólogo é em prol da liberdade e autonomia.
          </p>
          <p className="mb-4">
            Assim, conheci e me envolvi na perspectiva de uma abordagem teórica
            (a histórico-cultural) que apresenta uma clínica psicológica dentro
            desse horizonte: construção de autonomia e liberdade.
          </p>
          <p className="mb-4">
            Em todo esse período da graduação - e fora dele, ainda antes -, fiz
            parte da construção de coletivos, discussões e estudos sobre
            juventude, gênero, raça e sexualidade, para além da área da educação
            e da saúde pública, onde me aprofundei nos estágios e sigo nos
            estudos.
          </p>
          <p className="mb-4">
            Na clínica, tive contato com o atendimento de jovens e adolescentes,
            sendo os principais temas o processo de escolha profissional e
            cursinho popular, questões relacionadas a luto, autoestima, relações
            afetivas, relações familiares, trabalho, raça e sexualidade.
          </p>
         
        </div>

         <p className="mb-4">
            E, prazer, essa também sou eu ;)
          </p>

          <div className="flex justify-center w-full">
            <a
              target="_blank"
              href="https://wa.me/5516997833995"
              rel="noopener noreferrer"
              className="w-fit mt-4 rounded-lg"
            >
              <button className="w-fit bg-(--laranja) text-white px-4 py-2 rounded-lg mx-auto flex hover:text-black/60 hover:cursor-pointer hover:bg-(--laranja-apagado)">
                Vamos conversar?
              </button>
            </a>
          </div>
      </div>
    </div>
  );
};

export default Sobre;
