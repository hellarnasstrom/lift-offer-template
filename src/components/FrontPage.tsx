
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

const FrontPage = () => {
  return (
    <div className="page first-page">
      <PageHeader pageNumber={1} totalPages={3} />
      <div className="front-page">
        <h1>OFFERT</h1>
        <h2>H03514 - Uppgradering Nödtelefon</h2>
      </div>
      <PageFooter />
    </div>
  );
};

export default FrontPage;
