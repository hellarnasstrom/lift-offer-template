
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

const FrontPage = () => {
  return (
    <div className="page first-page">
      <PageHeader pageNumber={1} totalPages={3} />
      <div className="front-page flex flex-col items-center justify-center mt-20">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-[#0EA5E9] tracking-tight">OFFERT SERVICEAVTAL</h1>
          <p className="text-lg text-[#0EA5E9] mt-8">Offertnummer: 2024-001</p>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default FrontPage;
