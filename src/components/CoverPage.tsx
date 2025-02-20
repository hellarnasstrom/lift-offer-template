
import React from 'react';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';

interface CoverPageProps {
  logoUrl: string;
  title: string;
  subtitle: string;
  documentInfo: {
    documentNumber: string;
    documentDate: string;
  };
  companyInfo: any;
}

export const CoverPage: React.FC<CoverPageProps> = ({
  logoUrl,
  title,
  subtitle,
  documentInfo,
  companyInfo
}) => {
  return (
    <div className="page first-page">
      <PageHeader 
        logoUrl={logoUrl}
        pageNumber={1}
        totalPages={3}
        documentInfo={documentInfo}
      />
      
      <div className="front-page">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>

      <PageFooter companyInfo={companyInfo} />
    </div>
  );
};
