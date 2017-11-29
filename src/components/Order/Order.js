import React from "react";
import "./Order.css";

const Order = props => {
  const { name, price, createdAt } = props.order;
  return (
    <div className="order">
      <div className="order__upper">
        <div className="order__name">Название: {name}</div>
        <div className="order__price">Цена: {price}</div>
      </div>
      <div className="order__lower">
        <div className="order__date">Создан: {createdAt}</div>
      </div>
    </div>
  );
};

export default Order;