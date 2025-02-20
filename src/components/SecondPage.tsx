
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

const SecondPage = () => {
  return (
    <div className="page">
      <PageHeader pageNumber={2} totalPages={3} />
      <div className="content">
        <div className="section">
          <h2>2. Servicenivåer och responstider</h2>
          <p>Elevata Hissaktiebolag garanterar följande responstider för att säkerställa optimal service och minimal driftstörning:</p>
          <ul>
            <li>Akuta ärenden (personer fast i hiss): Max 1 timme</li>
            <li>Driftstopp utan instängda personer: Max 4 timmar</li>
            <li>Övriga ärenden: Nästa arbetsdag</li>
          </ul>
          <p>Vid akuta ärenden har vi jour dygnet runt, alla dagar om året. Vår personal är certifierad och har genomgått omfattande säkerhetsutbildning.</p>
        </div>

        <div className="section">
          <h2>3. Priser och betalningsvillkor</h2>
          <table className="price-table">
            <thead>
              <tr>
                <th>Tjänst</th>
                <th>Pris (SEK)</th>
                <th>Enhet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Grundservice</td>
                <td>12 000</td>
                <td>Per år</td>
              </tr>
              <tr>
                <td>Akututryckning</td>
                <td>1 200</td>
                <td>Per timme</td>
              </tr>
              <tr>
                <td>Extra servicebesök</td>
                <td>900</td>
                <td>Per timme</td>
              </tr>
            </tbody>
          </table>
          <p>Betalningsvillkor: 30 dagar netto. Priserna är angivna exklusive moms.</p>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default SecondPage;
