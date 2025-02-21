
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

const SecondPage = () => {
  return (
    <div className="page">
      <PageHeader pageNumber={2} totalPages={4} />
      <div className="content space-y-12">
        <div className="section">
          <h2 className="text-[#1A1F2C] text-xl font-semibold mb-6">Avtalets omfattning</h2>
          <p className="text-[#1A1F2C] leading-relaxed">
            Detta serviceavtal omfattar regelbundet underhåll, support och service av nödtelefonsystem 
            enligt specifikation. Avtalet säkerställer optimal funktionalitet och säkerhet för era hissar.
          </p>
        </div>

        <div className="section">
          <h2 className="text-[#1A1F2C] text-xl font-semibold mb-6">1. Servicenivåer och responstider</h2>
          <div className="space-y-4">
            <p className="text-[#0EA5E9] font-medium mb-4">
              För att garantera er trygghet och säkerhet erbjuder vi marknadens mest omfattande servicenivåer:
            </p>
            <div className="grid gap-4">
              <div className="p-4 rounded">
                <h4 className="font-semibold text-[#1A1F2C]">Prioritet 1: Akuta ärenden</h4>
                <p className="text-[#8E9196]">Personer fast i hiss - Responstid max 1 timme</p>
              </div>
              <div className="p-4 rounded">
                <h4 className="font-semibold text-[#1A1F2C]">Prioritet 2: Driftstopp</h4>
                <p className="text-[#8E9196]">Utan instängda personer - Responstid max 4 timmar</p>
              </div>
              <div className="p-4 rounded">
                <h4 className="font-semibold text-[#1A1F2C]">Prioritet 3: Övriga ärenden</h4>
                <p className="text-[#8E9196]">Service och underhåll - Nästa arbetsdag</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default SecondPage;
