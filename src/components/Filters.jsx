import { Form, Link } from "react-router";
import { useLoaderData } from "react-router-dom";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";

function Filters() {
  const { meta } = useLoaderData();
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="Поиск товара"
        name="search"
        size="input-sm"
      />
      <FormSelect
        label="Выбрать категорию"
        name="category"
        list={meta.categories}
        size="select-sm"
      />
      <FormSelect
        label="Выбрать компанию"
        name="company"
        list={meta.companies}
        size="select-sm"
      />
      <FormSelect
        label="Сортировать по"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
      />
      <FormRange name="price" label="Выберите цену" size="range-sm" />
      <button type="submit" className="btn btn-primary btn-sm">
        Поиск
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        Сбросить
      </Link>
    </Form>
  );
}

export default Filters;
