import { useLoaderData } from "react-router";
import {
  OrdersList,
  ComplexPaginationContainer,
  SectionTitle,
} from "../components";

function Orders() {
  const { meta } = useLoaderData();

  if (meta.pagination.total < 1) {
    return <SectionTitle text="Пожайлуста, сделайте заказ" />;
  }
  return (
    <>
      <SectionTitle text="Ваши заказы" />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
}

export default Orders;
