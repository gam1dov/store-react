import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

function FeaturedProducts() {
  return (
    <div className="pt-24">
      <SectionTitle text="Рекомендуемые товары" />
      <ProductsGrid />
    </div>
  );
}

export default FeaturedProducts;
