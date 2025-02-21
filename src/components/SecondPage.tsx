
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

const SecondPage = () => {
  return (
    <div className="page">
      <PageHeader pageNumber={2} totalPages={3} />
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

        <div className="section">
          <h2 className="text-[#1A1F2C] text-xl font-semibold mb-6">2. Priser och betalningsvillkor</h2>
          <div className="overflow-hidden rounded-lg border border-[#E5E5E5]">
            <table className="price-table w-full">
              <thead>
                <tr className="bg-[#F8F9FA]">
                  <th className="text-left p-4 text-[#1A1F2C] font-semibold">Tjänst</th>
                  <th className="text-left p-4 text-[#1A1F2C] font-semibold">Pris (SEK)</th>
                  <th className="text-left p-4 text-[#1A1F2C] font-semibold">Enhet</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#E5E5E5]">
                  <td className="p-4 text-[#0EA5E9]">Grundservice</td>
                  <td className="p-4 font-medium">12 000</td>
                  <td className="p-4 text-[#8E9196]">Per år</td>
                </tr>
                <tr className="border-t border-[#E5E5E5]">
                  <td className="p-4 text-[#0EA5E9]">Akututryckning</td>
                  <td className="p-4 font-medium">1 200</td>
                  <td className="p-4 text-[#8E9196]">Per timme</td>
                </tr>
                <tr className="border-t border-[#E5E5E5]">
                  <td className="p-4 text-[#0EA5E9]">Extra servicebesök</td>
                  <td className="p-4 font-medium">900</td>
                  <td className="p-4 text-[#8E9196]">Per timme</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[#8E9196] text-sm">
            Betalningsvillkor: 30 dagar netto. Alla priser är angivna exklusive moms.
          </p>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default SecondPage;
