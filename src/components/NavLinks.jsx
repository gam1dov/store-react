import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "главная" },
  { id: 2, url: "/about", text: "о нас" },
  { id: 3, url: "/products", text: "продукты" },
  { id: 4, url: "/cart", text: "корзина" },
  { id: 5, url: "/checkout", text: "оформление заказа" },
  { id: 6, url: "/orders", text: "заказы" },
];

function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;

        return (
          <li key={id}>
            <NavLink
              className={({ isActive }) =>
                `capitalize ${
                  isActive ? "bg-base-content text-primary-content" : ""
                }`
              }
              to={url}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
