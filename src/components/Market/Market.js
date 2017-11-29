import React, { Component } from "react";
import "./Market.css";
import { connect } from "react-redux";
import Order from "../Order/Order";
import { getMarketOrders } from "../../reducers";
import { createOrder, moveOrderToFarm } from "../../actions/marketActions";



let id = 0;
const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  "Капуста",
  "Редиска",
  "Огурцы",
  "Морковь",
  "Горох",
  "Баклажан",
  "Тыква",
  "Чеснок",
  "Лук",
  "Перец",
  "Картофель",
  "Редька"
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date().toLocaleString()
  };
};

class Market extends Component {
  render() {
    const { orders } = this.props;
    return (
      <div className="market">
        <h2 className="market__header">Новые заказы в магазине</h2>
        <button className="button" onClick={this.handleCreateOrderClick}>
          Создать заказ
        </button>
        <button
          className="button"
          onClick={this.handleMoveToFarmClick}
          disabled={!orders.length }
        >
          Отправить заказ на ферму
        </button>
        <ul className="order-list">
          {orders.map((value, index) => {
            return <Order order={value} key={value.id} />;
          })}
        </ul>
      </div>
    );
  }

  handleCreateOrderClick = () => {
    const { createOrder } = this.props;

    createOrder(getNewOrder());
  };

  handleMoveToFarmClick = () => {
    const { moveOrderToFarm, orders } = this.props;

    moveOrderToFarm(orders[orders.length-1]);
  };
}

const mapStateToProps = state => ({ orders: getMarketOrders(state) });

const mapDispatchToProps = { createOrder, moveOrderToFarm };

export default connect(mapStateToProps, mapDispatchToProps)(Market);