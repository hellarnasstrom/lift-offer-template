
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
  companyInfo: any; // Using any here since we already defined the type in PageFooter
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
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <h2 className="text-xl text-gray-700">{subtitle}</h2>
      </div>

      <PageFooter companyInfo={companyInfo} />
    </div>
  );
};
