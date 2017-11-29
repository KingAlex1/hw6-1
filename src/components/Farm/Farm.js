import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "../Order/Order";
import { getFarmOrders } from "../../reducers";
import { moveOrderToCustomer } from "../../actions/farmActions";



class Farm extends Component {
  render() {
    const { orders } = this.props;
    return (
      <div className="farm">
        <h2 className="farm__header">Новые заказы в магазине</h2>
        <button
          className="button"
          disabled={orders.length <= 0}
          onClick={this.handleMoveToCustomerClick}
        >
          Отправить урожай клиенту
        </button>
        <ul className="order-list">
          {orders.map((value, index) => {
            return <Order order={value} key={value.id} />;
          })}
        </ul>
      </div>
    );
  }

  handleMoveToCustomerClick = () => {
    const { moveOrderToCustomer, orders } = this.props;

    moveOrderToCustomer(orders[orders.length - 1]);
  };
}

const mapStateToProps = state => ({ orders: getFarmOrders(state) });

const mapDispatchToProps = { moveOrderToCustomer };

export default connect(mapStateToProps, mapDispatchToProps)(Farm);