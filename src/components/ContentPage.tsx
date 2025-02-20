
import React, { ReactNode } from 'react';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';

interface ContentPageProps {
  logoUrl: string;
  pageNumber: number;
  totalPages: number;
  companyInfo: any; // Using any since we already defined the type in PageFooter
  children: ReactNode;
}

export const ContentPage: React.FC<ContentPageProps> = ({
  logoUrl,
  pageNumber,
  totalPages,
  companyInfo,
  children
}) => {
  return (
    <div className="page">
      <PageHeader 
        logoUrl={logoUrl}
        pageNumber={pageNumber}
        totalPages={totalPages}
      />
      
      <div className="content">
        {children}
      </div>

      <PageFooter companyInfo={companyInfo} />
    </div>
  );
};
