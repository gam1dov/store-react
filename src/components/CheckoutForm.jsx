import { Form } from "react-router";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";

function CheckoutForm() {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">Информация о доставке</h4>
      <FormInput label="Имя и Фамилия" name="name" type="text" size="w-full" />
      <FormInput label="Адрес" name="address" type="text" size="w-full" />
      <div className="mt-4">
        <SubmitBtn text="Разместить заказ" />
      </div>
    </Form>
  );
}

export default CheckoutForm;
