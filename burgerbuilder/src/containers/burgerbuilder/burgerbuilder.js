import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/burger/burger";
import Builtcontrols from "../../components/burger/buildcontrols/buildcontrols";
import Model from "../../components/ui/model/model";
import Ordersummary from "../../components/burger/ordersummary/ordersummary";
import axios from "../../axios_orders";
import Spinner from "../../components/ui/spinner/spinner";
import Witherrorhandler from "../../hoc/witherrorhandler/witherrorhandler";
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
class burgerbuilder extends Component {
  state = {
    ingredients: null,
    totalprice: 4,
    purchasing: false,
    loading: false,
    error:false
  };
  componentDidMount() {
    axios
      .get("https://react-burger-f13e3.firebaseio.com/ingredients.json")
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error=>{
        this.setState({error:true})
      });
  }
  closemodelHandler = () => {
    this.setState({ purchasing: false });
  };
  addIngredientHandler = type => {
    const updated_ingredients = { ...this.state.ingredients };
    updated_ingredients[type] += 1;
    const update_price = this.state.totalprice + INGREDIENT_PRICES[type];
    this.setState({
      totalprice: update_price,
      ingredients: updated_ingredients
    });
  };
  removeIngredientHandler = type => {
    const updated_ingredients = { ...this.state.ingredients };
    var updated_price = this.state.totalprice;
    if (updated_ingredients[type] > 0) {
      updated_ingredients[type] -= 1;
      updated_price -= INGREDIENT_PRICES[type];
    }
    this.setState({
      totalprice: updated_price,
      ingredients: updated_ingredients
    });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchasecontinueHandler = () => {
    //alert("hey you can continue!")
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalprice,
      customer: {
        name: "sai Duddukuri",
        address: "850 blake street apt a",
        email: "sai.duddukuri@gmail.com"
      },
      delivaryMethod: "Fast"
    };
    axios
      .post("/orders.json", order)
      .then(this.setState({ loading: false, purchasing: false }))
      .catch(this.setState({ loading: false, purchasing: false }));
  };
  render() {
    const ingredient_state = { ...this.state.ingredients };
    const disable_order = this.state.totalprice <= 4.2;
    let ordersummary=null;

   
    let burger = this.state.error ? <p>Ingredients Cant be loaded!</p> : <Spinner />;
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <div>
            <Burger ingredients={this.state.ingredients} />
          </div>
          <div>
            <Builtcontrols
              purchasing={this.purchaseHandler}
              disable_order={disable_order}
              price={this.state.totalprice}
              ingredientAdded={this.addIngredientHandler}
              ingidientRemoved={this.removeIngredientHandler}
              ingredient_state={ingredient_state}
            />
          </div>
        </Aux>
      );
      ordersummary = (
        <Ordersummary
          totalprice={this.state.totalprice}
          continue={this.purchasecontinueHandler}
          closed={this.closemodelHandler}
          ingredients={this.state.ingredients}
        />
      );
      
    if (this.state.loading) {
      ordersummary = <Spinner />;
    }
    }

    for (let key in ingredient_state) {
      ingredient_state[key] = ingredient_state[key] > 0;
    }
    return (
      <Aux>
        <Model show={this.state.purchasing} closemodel={this.closemodelHandler}>
          {ordersummary}
        </Model>
        {burger}
      </Aux>
    );
  }
}

export default Witherrorhandler(burgerbuilder, axios);
