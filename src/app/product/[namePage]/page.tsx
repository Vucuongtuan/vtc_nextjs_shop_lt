import ContentListProduct from "./components/ContentListProduct";

const NamePage = ({ params }: { params: { namePage: string } }) => {
  return (
    <>
      <ContentListProduct params={params} />
    </>
  );
};

export default NamePage;
