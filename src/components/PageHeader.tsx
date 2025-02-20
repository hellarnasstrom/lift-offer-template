
interface PageHeaderProps {
  pageNumber: number;
  totalPages: number;
}

const PageHeader = ({ pageNumber, totalPages }: PageHeaderProps) => {
  return (
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
        <p>Sida {pageNumber} av {totalPages}</p>
      </div>
    </div>
  );
};

export default PageHeader;
