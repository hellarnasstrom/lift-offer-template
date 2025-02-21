
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

const FourthPage = () => {
  return (
    <div className="page">
      <PageHeader pageNumber={4} totalPages={4} />
      <div className="content space-y-12">
        <div className="section">
          <h2 className="text-[#1A1F2C] text-xl font-semibold mb-6">4. Avtalstid och uppsägning</h2>
          <div className="space-y-4">
            <p className="text-[#8E9196] leading-relaxed">
              Detta serviceavtal gäller från och med undertecknandet och löper under en initial period om 12 månader. 
              Därefter förlängs avtalet automatiskt med 12 månader i taget om ingen av parterna säger upp avtalet 
              senast tre månader före avtalstidens utgång.
            </p>
            <p className="text-[#8E9196] leading-relaxed">
              Vid uppsägning ska detta ske skriftligen via rekommenderat brev eller e-post med mottagningsbekräftelse.
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="text-[#1A1F2C] text-xl font-semibold mb-6">5. Omfattning och villkor</h2>
          <div className="space-y-6">
            <p className="text-[#6E59A5] font-medium">Serviceavtalet omfattar följande punkter:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#8E9196]">
                <span className="text-[#7E69AB]">•</span>
                <span>Regelbunden översyn och underhåll enligt gällande föreskrifter</span>
              </li>
              <li className="flex items-start gap-3 text-[#8E9196]">
                <span className="text-[#7E69AB]">•</span>
                <span>Teknisk support via telefon under kontorstid</span>
              </li>
              <li className="flex items-start gap-3 text-[#8E9196]">
                <span className="text-[#7E69AB]">•</span>
                <span>Periodiska säkerhetskontroller</span>
              </li>
              <li className="flex items-start gap-3 text-[#8E9196]">
                <span className="text-[#7E69AB]">•</span>
                <span>Dokumentation av utförda arbeten</span>
              </li>
              <li className="flex items-start gap-3 text-[#8E9196]">
                <span className="text-[#7E69AB]">•</span>
                <span>Prioriterad service vid driftstörningar</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default FourthPage;
