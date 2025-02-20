
import React from 'react';

interface PageHeaderProps {
  logoUrl: string;
  pageNumber?: number;
  totalPages?: number;
  documentInfo?: {
    documentNumber?: string;
    documentDate?: string;
  };
}

export const PageHeader: React.FC<PageHeaderProps> = ({ 
  logoUrl, 
  pageNumber, 
  totalPages,
  documentInfo 
}) => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logoUrl} alt="Company Logo" />
      </div>
      <div className="header-info">
        {documentInfo && (
          <>
            {documentInfo.documentNumber && <p>Offertnummer: {documentInfo.documentNumber}</p>}
            {documentInfo.documentDate && <p>Dokumentdatum: {documentInfo.documentDate}</p>}
          </>
        )}
        {pageNumber && totalPages && <p>Sida {pageNumber} av {totalPages}</p>}
      </div>
    </div>
  );
};
