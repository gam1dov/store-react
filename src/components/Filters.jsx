import { Form, Link } from "react-router";
import { useLoaderData } from "react-router-dom";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

function Filters() {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="Поиск товара"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormSelect
        label="Выбрать категорию"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      <FormSelect
        label="Выбрать компанию"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      <FormSelect
        label="Сортировать по"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      <FormRange
        name="price"
        label="Выберите цену"
        size="range-sm"
        price={price}
      />
      <FormCheckbox
        name="shipping"
        label="Бесплатная доставка"
        size="checkbox-sm"
        defaultValue={shipping}
      />
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
