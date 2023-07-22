// eslint-disable-for-all
//FOR ALL CHECKOUT ITEMS
import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer.js";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();//value come from addtocart
  // console.log(basket[0].price)
  // let totalPrice = 0;

  //sum price of all the basket item
  // for (let i = 0; i < basket.length; i++) {
  //   var value = basket[i]?.price;
  //   if (value !== undefined) {
  //     totalPrice += value;
  //   }
  // }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong> {`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹ "}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
