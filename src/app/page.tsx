import Banner from "./components/banner";
import { Container } from "@mui/material";
import ProductTrend from "./components/productTrend";
import ListProduct from "./components/listProduct";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Container>
        <Banner />
        <ProductTrend />
        <ListProduct />
      </Container>
    </main>
  );
}
