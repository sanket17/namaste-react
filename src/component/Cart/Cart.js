import { useSelector, useDispatch } from "react-redux";
import { MENU_IMAGE } from "../../Utils/constant";
import DeleteImage from "../../style/images/delete.png";
import { removeItem, clearCart } from "../../Store/CartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCartClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 mx-auto">
      <div className="text-center font-bold m-4 p-4 text-2xl">Cart</div>
      {cartItems.length > 0 && (
        <div className="m-6 text-right">
          <button
            className="border bg-green-500 p-4 text-white rounded-lg"
            onClick={() => {
              handleClearCartClick();
            }}>
            Clear Cart
          </button>
        </div>
      )}

      {cartItems.length === 0 && (
        <h4 className="mt-4 text-center">
          No Items present in Cart!! Please add few.
        </h4>
      )}
      {cartItems.map((item) => {
        return (
          <div
            data-testid="cartItem"
            key={item.id}
            className="flex flex-wrap justify-between border-b-4 mt-2">
            <div className="flex flex-wrap">
              <img
                src={`${MENU_IMAGE}${item.imageId}`}
                alt={item.name}
                className="h-[50px] w-[50px]"
              />
              <h3 className="m-2 p-2">{item.name}</h3>
            </div>
            <div className="flex flex-wrap">
              <h2 className="p-4 font-bold text-xl">
                {" "}
                <span>&#8377;</span>
                {(item.price || item.defaultPrice) / 100}
              </h2>
              <button
                data-testid="deleteItem"
                onClick={() => handleDelete(item.id)}>
                {" "}
                <img
                  src={DeleteImage}
                  alt="delete image"
                  className="w-[25px] h-[25px]"
                />
              </button>
            </div>
          </div>
        );
      })}
      {cartItems.length > 0 && (
        <div className="flex flex-wrap justify-between m-4 p-4 text-xl">
          <h2 className="font-bold">Total</h2>
          <div className="font-bold">
            <span>&#8377;</span>
            {cartItems.reduce((sum, item) => {
              return sum + (item.defaultPrice || item.price) / 100;
            }, 0)}
          </div>
        </div>
      )}
    </div>
  );
}
