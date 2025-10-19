import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "главная" },
  { id: 2, url: "/about", text: "о нас" },
  { id: 3, url: "/products", text: "продукция" },
  { id: 4, url: "/cart", text: "корзина" },
  { id: 5, url: "/checkout", text: "оформление заказа" },
  { id: 6, url: "/orders", text: "заказы" },
];

function NavLinks() {
  const user = useSelector((state) => state.userState.user);
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === "/checkout" || url === "/orders") && !user) return null;

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
