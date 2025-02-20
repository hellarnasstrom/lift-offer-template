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
          <div className="header-info">
            <p>Offertnummer: 2024-001</p>
            <p>Dokumentdatum: {new Date().toLocaleDateString("sv-SE")}</p>
            <p>Sida 1 av 3</p>
          </div>
        </div>

        <div className="front-page">
          <h1>OFFERT</h1>
          <h2>H03514 - Uppgradering Nödtelefon</h2>
        </div>

        <div className="footer">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>Adress</h4>
              <p>ELEVATA HISS AKTIEBOLAG</p>
              <p>VARBERGSVÄGEN, 2090</p>
              <p>43961 FRILLESÅS</p>
              <p>Sverige</p>
            </div>
            <div className="footer-section">
              <h4>Kontakt</h4>
              <p>Telefon: 010-2040305</p>
              <p>E-post: info@elevata.se</p>
              <p>Webbadress: www.elevata.se</p>
            </div>
            <div className="footer-section">
              <h4>Betalningsinformation</h4>
              <p>Bankgiro: 291-9462</p>
              <p>Organisationsnr: 556757-6870</p>
              <p>Momsreg. nr: SE556757687001</p>
              <p>IBAN: SE41 5000 0000 0500 5101 7210</p>
              <p>BIC: ESSESESXXXX</p>
            </div>
          </div>
        </div>
      </div>

      <div className="page">
        <div className="header">
          <div className="header-logo">
            <img 
              src="/lovable-uploads/5ae8598c-1f09-4f6f-b4ee-c62f5e17ace7.png"
              alt="Elevata Logo"
            />
          </div>
          <div className="header-info">
            <p>Sida 2 av 3</p>
          </div>
        </div>

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

        <div className="footer">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>Adress</h4>
              <p>ELEVATA HISS AKTIEBOLAG</p>
              <p>VARBERGSVÄGEN, 2090</p>
              <p>43961 FRILLESÅS</p>
              <p>Sverige</p>
            </div>
            <div className="footer-section">
              <h4>Kontakt</h4>
              <p>Telefon: 010-2040305</p>
              <p>E-post: info@elevata.se</p>
              <p>Webbadress: www.elevata.se</p>
            </div>
            <div className="footer-section">
              <h4>Betalningsinformation</h4>
              <p>Bankgiro: 291-9462</p>
              <p>Organisationsnr: 556757-6870</p>
              <p>Momsreg. nr: SE556757687001</p>
              <p>IBAN: SE41 5000 0000 0500 5101 7210</p>
              <p>BIC: ESSESESXXXX</p>
            </div>
          </div>
        </div>
      </div>

      <div className="page">
        <div className="header">
          <div className="header-logo">
            <img 
              src="/lovable-uploads/5ae8598c-1f09-4f6f-b4ee-c62f5e17ace7.png"
              alt="Elevata Logo"
            />
          </div>
          <div className="header-info">
            <p>Sida 3 av 3</p>
          </div>
        </div>

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

        <div className="footer">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>Adress</h4>
              <p>ELEVATA HISS AKTIEBOLAG</p>
              <p>VARBERGSVÄGEN, 2090</p>
              <p>43961 FRILLESÅS</p>
              <p>Sverige</p>
            </div>
            <div className="footer-section">
              <h4>Kontakt</h4>
              <p>Telefon: 010-2040305</p>
              <p>E-post: info@elevata.se</p>
              <p>Webbadress: www.elevata.se</p>
            </div>
            <div className="footer-section">
              <h4>Betalningsinformation</h4>
              <p>Bankgiro: 291-9462</p>
              <p>Organisationsnr: 556757-6870</p>
              <p>Momsreg. nr: SE556757687001</p>
              <p>IBAN: SE41 5000 0000 0500 5101 7210</p>
              <p>BIC: ESSESESXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
