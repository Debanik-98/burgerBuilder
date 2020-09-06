import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactData from "./containers/Checkout/ContactData/ContactData";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/orders" component={Orders} />
            <Route path="/checkout" component={Checkout} />
            {/* <Route
              path="/checkout/contact-data"
              exact
              component={ContactData}
            /> */}
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
