
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

const FrontPage = () => {
  return (
    <div className="page first-page">
      <PageHeader pageNumber={1} totalPages={3} />
      <div className="front-page flex flex-col items-center justify-center gap-12">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-[#0EA5E9] tracking-tight">OFFERT SERVICEAVTAL</h1>
          <h2 className="text-2xl text-[#1A1F2C] font-medium">Uppgradering Nödtelefon System</h2>
          <p className="text-lg text-[#0EA5E9] mt-8">Referensnummer: H03514</p>
        </div>
        
        <div className="mt-16 p-8 bg-[#D3E4FD] rounded-lg max-w-xl w-full shadow-lg">
          <h3 className="text-[#1A1F2C] font-semibold text-xl mb-6">Avtalets omfattning</h3>
          <p className="text-[#1A1F2C] leading-relaxed text-lg">
            Detta serviceavtal omfattar regelbundet underhåll, support och service av nödtelefonsystem 
            enligt specifikation. Avtalet säkerställer optimal funktionalitet och säkerhet för era hissar.
          </p>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default FrontPage;
