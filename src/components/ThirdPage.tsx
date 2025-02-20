
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

const ThirdPage = () => {
  return (
    <div className="page">
      <PageHeader pageNumber={3} totalPages={3} />
      <div className="content">
        <div className="section">
          <h2>4. Avtalstid och uppsägning</h2>
          <p>Detta serviceavtal gäller från och med undertecknandet och löper under en initial period om 12 månader. 
          Därefter förlängs avtalet automatiskt med 12 månader i taget om ingen av parterna säger upp avtalet 
          senast tre månader före avtalstidens utgång.</p>
          
          <p>Vid uppsägning ska detta ske skriftligen via rekommenderat brev eller e-post med mottagningsbekräftelse.</p>
        </div>

        <div className="section">
          <h2>5. Omfattning och villkor</h2>
          <p>Serviceavtalet omfattar följande punkter:</p>
          <ul>
            <li>Regelbunden översyn och underhåll enligt gällande föreskrifter</li>
            <li>Teknisk support via telefon under kontorstid</li>
            <li>Periodiska säkerhetskontroller</li>
            <li>Dokumentation av utförda arbeten</li>
            <li>Prioriterad service vid driftstörningar</li>
          </ul>
          
          <p>Eventuella tillkommande arbeten eller reservdelar som inte ingår i grundavtalet debiteras separat 
          enligt gällande prislista efter godkännande från beställaren.</p>
          
          <p>För att säkerställa optimal funktion och säkerhet ska utrustningen endast hanteras av Elevata 
          Hissaktiebolags auktoriserade personal.</p>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default ThirdPage;
