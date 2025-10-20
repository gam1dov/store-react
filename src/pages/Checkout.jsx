import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";

function Checkout() {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) return <SectionTitle text="Ваша корзина пуста!" />;

  return (
    <>
      <SectionTitle text="Разместить заказ" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}

export default Checkout;
