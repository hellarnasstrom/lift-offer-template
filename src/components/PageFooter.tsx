
const PageFooter = () => {
  return (
    <div className="footer mt-auto pt-8">
      <div className="footer-grid grid grid-cols-3 gap-8 p-6 border-t border-[#E5E5E5] text-sm">
        <div className="footer-section space-y-2">
          <h4 className="font-semibold text-[#1A1F2C]">Adress</h4>
          <p className="text-[#8E9196]">ELEVATA HISS AKTIEBOLAG</p>
          <p className="text-[#8E9196]">VARBERGSVÄGEN, 2090</p>
          <p className="text-[#8E9196]">43961 FRILLESÅS</p>
          <p className="text-[#8E9196]">Sverige</p>
        </div>

        <div className="footer-section space-y-2">
          <h4 className="font-semibold text-[#1A1F2C]">Kontakt</h4>
          <p className="text-[#8E9196]">Telefon: 010-2040305</p>
          <p className="text-[#8E9196]">E-post: info@elevata.se</p>
          <p className="text-[#8E9196]">Webbadress: www.elevata.se</p>
        </div>

        <div className="footer-section space-y-2">
          <h4 className="font-semibold text-[#1A1F2C]">Betalningsinformation</h4>
          <p className="text-[#8E9196]">Bankgiro: 291-9462</p>
          <p className="text-[#8E9196]">Organisationsnr: 556757-6870</p>
          <p className="text-[#8E9196]">Momsreg. nr: SE556757687001</p>
          <p className="text-[#8E9196]">IBAN: SE41 5000 0000 0500 5101 7210</p>
          <p className="text-[#8E9196]">BIC: ESSESESXXXX</p>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
