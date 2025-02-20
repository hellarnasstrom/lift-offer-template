
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

const FrontPage = () => {
  return (
    <div className="page first-page">
      <PageHeader pageNumber={1} totalPages={3} />
      <div className="front-page flex flex-col items-center justify-center gap-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-[#1A1F2C] tracking-tight">OFFERT SERVICEAVTAL</h1>
          <h2 className="text-2xl text-[#8E9196] font-medium">Uppgradering Nödtelefon System</h2>
          <p className="text-lg text-[#6E59A5] mt-8">Referensnummer: H03514</p>
        </div>
        
        <div className="mt-16 p-6 bg-[#F1F0FB] rounded-lg max-w-lg w-full">
          <h3 className="text-[#1A1F2C] font-semibold mb-4">Avtalets omfattning</h3>
          <p className="text-[#8E9196] leading-relaxed">
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
