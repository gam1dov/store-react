import { useSelector } from "react-redux";
import { Link } from "react-router";
import { CartTotals, CartItemsList, SectionTitle } from "../components";

function Cart() {
  const user = useSelector((state) => state.userState.user);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return <SectionTitle text="Ваша корзина пуста!" />;
  }
  return (
    <>
      <SectionTitle text="Корзина" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Перейти к оформлению заказа
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              Пожалуйста, войдите в систему
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
