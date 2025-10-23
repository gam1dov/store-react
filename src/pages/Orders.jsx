import { useLoaderData } from "react-router";
import { OrdersList, PaginationContainer, SectionTitle } from "../components";

function Orders() {
  const { meta } = useLoaderData();

  if (meta.pagination.total < 1) {
    return <SectionTitle text="Пожайлуста, сделайте заказ" />;
  }
  return (
    <>
      <SectionTitle text="Ваши заказы" />
      <OrdersList />
      <PaginationContainer />
    </>
  );
}

export default Orders;
