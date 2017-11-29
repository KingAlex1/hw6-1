import React, { Component } from "react";
import { connect } from "react-redux";
import { getBudget } from "../../reducers";

import "./Budget.css";

class Budget extends Component {
  render() {
    const {
      profit,
      marketExpance,
      farmExpanse,
      deliveryExpanse
    } = this.props.budget;

    return (
      <div className="budget">
        <h2> Бюджет </h2>
        <p> Всего получено денег:{profit} </p>
        <p> Расходы продавцов:{-marketExpance} </p>
        <p> Расходы на ферме:{-farmExpanse} </p>
        <p> Расходы на доставку:{-deliveryExpanse} </p>
        <p>
          Итого:
          {profit -
            marketExpance -
            farmExpanse -
            deliveryExpanse}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  budget:getBudget(state)
});



export default connect(mapStateToProps)(
  Budget
);
