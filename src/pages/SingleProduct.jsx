import { Link } from "react-router";
import { useLoaderData } from "react-router-dom";
import { formatPrice, generateArrayElements } from "../utils";
import { useState } from "react";

function SingleProduct() {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const rublesAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  function handleAmount(e) {
    setAmount(parseInt(e.target.value));
  }

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Главная страница</Link>
          </li>
          <li>
            <Link to="/products">Продукция</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitilize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{rublesAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              Цвет
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="mt-2 form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="text-md font-medium -tracking-wider capitalize">
                Количество
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md mt-2"
              id="amount"
              value={amount}
              onChange={handleAmount}
            >
              {generateArrayElements(20).map((amount) => {
                return (
                  <option key={amount} value={amount}>
                    {amount}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mt-3">
            <button
              className="btn btn-secondary btn-md"
              onClick={() => console.log("Добавить в корзину")}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
