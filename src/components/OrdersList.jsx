import day from "dayjs";
import { useLoaderData } from "react-router";

function OrdersList() {
  const { orders, meta } = useLoaderData();
  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">
        Общее количество заказов: {meta.pagination.total}
      </h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Адрес</th>
              <th>Товары</th>
              <th>Стоимость</th>
              <th className="hidden sm:block">Дата</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              console.log(order);
              const id = order.id;
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes;

              const date = day(createdAt).format("HH:mm, D MMMM YYYY");

              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td className="hidden sm:block">{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersList;
