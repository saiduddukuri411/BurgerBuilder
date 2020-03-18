import React,{Component} from 'react';
import Aux from  '../../hoc/Auxilary'
import Burger from '../../components/burger/burger'
import Builtcontrols from '../../components/burger/buildcontrols/buildcontrols'
import Model from '../../components/ui/model/model'
import Ordersummary from '../../components/burger/ordersummary/ordersummary'
const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7    
}
class burgerbuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalprice:4,
        purchasing:false
    }
    closemodelHandler=()=>{
        this.setState({purchasing:false})
    }
    addIngredientHandler=(type)=>{
             const updated_ingredients={...this.state.ingredients};
             updated_ingredients[type]+=1;
             const update_price=this.state.totalprice+INGREDIENT_PRICES[type];
             this.setState({totalprice:update_price,ingredients:updated_ingredients});

    }
    removeIngredientHandler=(type)=>{
        const updated_ingredients={...this.state.ingredients};
        var updated_price=this.state.totalprice
        if(updated_ingredients[type]>0){
        updated_ingredients[type]-=1;
        updated_price-=INGREDIENT_PRICES[type];
        }
        this.setState({totalprice:updated_price,ingredients:updated_ingredients});
    }
    
    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }
    purchasecontinueHandler=()=>{
        alert("hey you can continue!")
    }
  render(){
    const ingredient_state={...this.state.ingredients};
    const disable_order=this.state.totalprice<=4.2;
    for (let key in ingredient_state ){
          ingredient_state[key]=ingredient_state[key]>0;
             };
      return(
              <Aux>
                  <Model show={this.state.purchasing} closemodel={this.closemodelHandler}><Ordersummary totalprice={this.state.totalprice} continue={this.purchasecontinueHandler} closed={this.closemodelHandler} ingredients={this.state.ingredients}/></Model>
                  <div>
                      <Burger ingredients={this.state.ingredients}/>
                  </div>
                  <div>
                      <Builtcontrols purchasing={this.purchaseHandler} disable_order={disable_order} price={this.state.totalprice} ingredientAdded={this.addIngredientHandler} ingidientRemoved={this.removeIngredientHandler} ingredient_state={ingredient_state}/>
                  </div>
              </Aux>
      );
  }
}

export default burgerbuilder;