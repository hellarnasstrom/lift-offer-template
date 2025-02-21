
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

const ThirdPage = () => {
  return (
    <div className="page">
      <PageHeader pageNumber={3} totalPages={4} />
      <div className="content space-y-12">
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

export default ThirdPage;
