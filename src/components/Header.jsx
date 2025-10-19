import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  function handleLogout() {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  }

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-sx sm:text-sm">Привет, {user.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary"
              onClick={handleLogout}
            >
              Выйти
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Войти / Гость
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Создать аккаунт
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
