import ForestRoundedIcon from "@mui/icons-material/ForestRounded";

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
  return (
    <div>
      {/* Header */}
      <div className="flex justify-center mt-8 ">
        <h1 className="text-2xl font-bold text-center bg-(--verde-apagado)  py-4 px-4 rounded-xl w-fit">
          Áreas de Atendimento
        </h1>
      </div>
      {/* Icons */}
      <div className="flex justify-center flex-wrap gap-x-48 gap-y-16 w-2/3 mx-auto my-12 ">
        {areas.map((area, index) => (
          <div key={index}>
            <ForestRoundedIcon sx={{ fontSize: 80 }} />
            <p className="text-center">{area}</p>
          </div>
          ))}
        </div>
    </div>
  );
};

export default AreasDeAtendimento;
