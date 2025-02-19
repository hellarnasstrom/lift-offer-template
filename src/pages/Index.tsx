
const Index = () => {
  return (
    <>
      <div className="page first-page">
        <div className="header">
          <div className="header-logo">
            <img 
              src="/lovable-uploads/5ae8598c-1f09-4f6f-b4ee-c62f5e17ace7.png"
              alt="Elevata Logo"
            />
          </div>
          <div className="header-text">
            <p>Dokumentdatum: {new Date().toLocaleDateString("sv-SE")}</p>
            <p>Offertnummer: 2024-001</p>
          </div>
        </div>

        <div className="front-page">
          <h1>OFFERT</h1>
          <h2>H03514 - Uppgradering Nödtelefon</h2>
        </div>

        <div className="footer">
          <div className="footer-grid">
            <div>
              <p>Elevata Hissaktiebolag</p>
              <p>Org.nr: 556123-4567</p>
            </div>
            <div>
              <p>Tel: 08-123 45 67</p>
              <p>E-post: info@elevata.se</p>
            </div>
            <div>
              <p>www.elevata.se</p>
              <p>Sida 1 av 3</p>
            </div>
          </div>
        </div>
      </div>

      <div className="page">
        <div className="header">
          <img 
            src="/lovable-uploads/5ae8598c-1f09-4f6f-b4ee-c62f5e17ace7.png"
            alt="Elevata Logo"
            className="header-logo"
          />
        </div>

        <div className="content">
          <div className="section">
            <h2>2. Servicenivåer och responstider</h2>
            <p>HissService AB garanterar följande responstider:</p>
            <ul>
              <li>Akuta ärenden (personer fast i hiss): Max 1 timme</li>
              <li>Driftstopp utan instängda personer: Max 4 timmar</li>
              <li>Övriga ärenden: Nästa arbetsdag</li>
            </ul>
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
            <p>Betalningsvillkor: 30 dagar netto</p>
            <p>Priserna är angivna exklusive moms</p>
          </div>
        </div>

        <div className="footer">
          <div className="footer-grid">
            <div>
              <p>Elevata Hissaktiebolag</p>
              <p>Org.nr: 556123-4567</p>
            </div>
            <div>
              <p>Tel: 08-123 45 67</p>
              <p>E-post: info@elevata.se</p>
            </div>
            <div>
              <p>www.elevata.se</p>
              <p>Sida 2 av 3</p>
            </div>
          </div>
        </div>
      </div>

      <div className="page">
        <div className="header">
          <img 
            src="/lovable-uploads/5ae8598c-1f09-4f6f-b4ee-c62f5e17ace7.png"
            alt="Elevata Logo"
            className="header-logo"
          />
        </div>

        <div className="content">
          <div className="section">
            <h2>4. Avtalstid och uppsägning</h2>
            <p>Detta avtal gäller från och med undertecknandet och löper under en initial period om 12 månader. 
            Därefter förlängs avtalet automatiskt med 12 månader i taget om ingen av parterna säger upp avtalet 
            senast tre månader före avtalstidens utgång.</p>
          </div>

          <div className="section">
            <h2>5. Underskrifter</h2>
            <div className="signature-area">
              <div>
                <p><strong>För HissService AB</strong></p>
                <div className="signature-line"></div>
                <p>Namn:</p>
                <p>Titel:</p>
                <p>Datum:</p>
              </div>
              <div>
                <p><strong>För Fastighets AB Exempel</strong></p>
                <div className="signature-line"></div>
                <p>Namn:</p>
                <p>Titel:</p>
                <p>Datum:</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-grid">
            <div>
              <p>Elevata Hissaktiebolag</p>
              <p>Org.nr: 556123-4567</p>
            </div>
            <div>
              <p>Tel: 08-123 45 67</p>
              <p>E-post: info@elevata.se</p>
            </div>
            <div>
              <p>www.elevata.se</p>
              <p>Sida 3 av 3</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
