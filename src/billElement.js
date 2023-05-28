import React, { useState } from "react";

const BillElement = ({
  id,
  name,
  price,
  amountToPay,
  onAmountChange,
  onRemoveItem,
  isAdmin
}) => {
  const handleAmountChange = (e) => {
    const newAmount = parseInt(e.target.value);
    onAmountChange(id, newAmount);
  };

  const handleRemove = () => {
    onRemoveItem(id);
  };

  return (
    <div className="bill-element">
      <span>{id}</span>
      <span>{name}</span>
      <span>{price}</span>
      <span>{amountToPay}</span>
      <span>{price * amountToPay}</span>
      {isAdmin && (
        <>
          <input
            type="number"
            value={amountToPay}
            onChange={handleAmountChange}
          />
          <button onClick={handleRemove}>Remove</button>
        </>
      )}
    </div>
  );
};
export default BillElement;
