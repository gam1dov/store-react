import { Filters, PaginationContainer, ProductsContainer } from "../components";

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

export default Products;
