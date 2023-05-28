import "./styles.css";
import react, { useState } from "react";

const products = [
  { title: "itemA", price: 10, amount: 0, id: 1 },
  { title: "itemB", price: 20, amount: 2, id: 2 },
  { title: "itemC", price: 22, amount: 3, id: 3 }
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <Bill />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Bar Payment System </h1>
    </header>
  );
};

// const Bill = ({ items, totalAmount }) => {
//   const listItems = products.map((product) => (
//     <li
//       key={product.id}
//       style={{
//         color: product.amount ? "magenta" : "darkgreen"
//       }}
//     >
//       {product.title}
//     </li>
//   ));

//   return <ul>{listItems}</ul>;
// };

const Bill = ({ items }) => {};

// const Bill = ({ items }) => {
//   // Initialize the bill items state
//   const [billItems, setBillItems] = useState(items);

//   // Handle amount change for a specific item
//   const handleAmountChange = (itemId, newAmount) => {
//     const updatedItems = billItems.map((item) => {
//       if (item.id === itemId) {
//         return { ...item, amountToPay: newAmount };
//       }
//       return item;
//     });

//     setBillItems(updatedItems);
//   };

//   // Handle item removal
//   const handleRemoveItem = (itemId) => {
//     const updatedItems = billItems.filter((item) => item.id !== itemId);
//     setBillItems(updatedItems);
//   };

//   // Calculate the total price
//   const totalPrice = billItems
//     .filter((item) => item.amountToPay > 0)
//     .reduce((sum, item) => sum + item.price * item.amountToPay, 0);

//   // Handle payment
//   const handlePayment = () => {
//     // Handle payment logic here
//     console.log('Processing payment...');
//   };

//   return (
//     <div className="bill">
//       {billItems.map((item) => (
//         <BillItem
//           key={item.id}
//           id={item.id}
//           name={item.name}
//           price={item.price}
//           amountToPay={item.amountToPay}
//           onAmountChange={handleAmountChange}
//           onRemoveItem={handleRemoveItem}
//         />
//       ))}
//       <p>Total Price to Pay: ${totalPrice}</p>
//       <button onClick={handlePayment}>Proceed to Payment</button>
//     </div>
//   );
// };

const BillItem = ({
  id,
  name,
  price,
  amountToPay,
  onAmountChange,
  onRemoveItem
}) => {
  // Handle amount change for the item
  const handleAmountChange = (e) => {
    // Parse the new amount value from the input
    const newAmount = parseInt(e.target.value);
    // Call the onAmountChange callback with the item ID and new amount
    onAmountChange(id, newAmount);
  };

  // Handle item removal
  const handleRemove = () => {
    // Call the onRemoveItem callback with the item ID
    onRemoveItem(id);
  };

  return (
    <div className="bill-item">
      <span>{id}</span> {/* Display the item ID */}
      <span>{name}</span> {/* Display the item name */}
      <span>{price}</span> {/* Display the item price */}
      <span>{amountToPay}</span> {/* Display the amount to pay for the item */}
      <span>{price * amountToPay}</span>{" "}
      {/* Calculate and display the total price for the item */}
      <input
        type="number"
        value={amountToPay}
        onChange={handleAmountChange}
      />{" "}
      {/* Input field for modifying the amount to pay */}
      <button onClick={handleRemove}>Remove</button>{" "}
      {/* Button to remove the item */}
    </div>
  );
};
