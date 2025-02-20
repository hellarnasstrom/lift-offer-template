
const PageFooter = () => {
  return (
    <div className="footer mt-auto pt-8">
      <div className="footer-grid grid grid-cols-3 gap-8 p-6 border-t border-[#E5E5E5] text-sm">
        <div className="footer-section space-y-2">
          <h4 className="font-semibold text-[#1A1F2C]">Företagsinformation</h4>
          <p className="text-[#8E9196]">ELEVATA HISS AKTIEBOLAG</p>
          <p className="text-[#8E9196]">VARBERGSVÄGEN 2090</p>
          <p className="text-[#8E9196]">439 61 FRILLESÅS</p>
          <p className="text-[#8E9196]">Sverige</p>
          <p className="text-[#8E9196] mt-2">Org.nr: 556757-6870</p>
          <p className="text-[#8E9196]">Godkänd för F-skatt</p>
          <p className="text-[#8E9196]">VAT: SE556757687001</p>
        </div>

        <div className="footer-section space-y-2">
          <h4 className="font-semibold text-[#1A1F2C]">Kontaktuppgifter</h4>
          <p className="text-[#8E9196]">Växel: 010-204 03 05</p>
          <p className="text-[#8E9196]">Jour: 010-204 03 00</p>
          <p className="text-[#8E9196]">E-post: service@elevata.se</p>
          <p className="text-[#8E9196]">Support: support@elevata.se</p>
          <p className="text-[#8E9196]">Webb: www.elevata.se</p>
          <div className="mt-2">
            <p className="text-[#8E9196]">Öppettider:</p>
            <p className="text-[#8E9196]">Mån-Fre: 07:00-16:00</p>
          </div>
        </div>

        <div className="footer-section space-y-2">
          <h4 className="font-semibold text-[#1A1F2C]">Betalningsinformation</h4>
          <p className="text-[#8E9196]">Bankgiro: 291-9462</p>
          <p className="text-[#8E9196]">SWIFT/BIC: ESSESESS</p>
          <p className="text-[#8E9196]">IBAN: SE41 5000 0000 0500 5101 7210</p>
          <div className="mt-2">
            <p className="text-[#8E9196]">Betalningsvillkor:</p>
            <p className="text-[#8E9196]">30 dagar netto</p>
            <p className="text-[#8E9196]">Dröjsmålsränta 8% + gällande referensränta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
