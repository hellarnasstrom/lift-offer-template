
import React from 'react';

interface CompanyInfo {
  name: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  website: string;
  bankgiro: string;
  orgNr: string;
  vatNr: string;
  iban: string;
  bic: string;
}

interface PageFooterProps {
  companyInfo: CompanyInfo;
}

export const PageFooter: React.FC<PageFooterProps> = ({ companyInfo }) => {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h4>Adress</h4>
          <p>{companyInfo.name}</p>
          <p>{companyInfo.address}</p>
          <p>{companyInfo.postalCode} {companyInfo.city}</p>
          <p>{companyInfo.country}</p>
        </div>
        <div className="footer-section">
          <h4>Kontakt</h4>
          <p>Telefon: {companyInfo.phone}</p>
          <p>E-post: {companyInfo.email}</p>
          <p>Webbadress: {companyInfo.website}</p>
        </div>
        <div className="footer-section">
          <h4>Betalningsinformation</h4>
          <p>Bankgiro: {companyInfo.bankgiro}</p>
          <p>Organisationsnr: {companyInfo.orgNr}</p>
          <p>Momsreg. nr: {companyInfo.vatNr}</p>
          <p>IBAN: {companyInfo.iban}</p>
          <p>BIC: {companyInfo.bic}</p>
        </div>
      </div>
    </div>
  );
};
