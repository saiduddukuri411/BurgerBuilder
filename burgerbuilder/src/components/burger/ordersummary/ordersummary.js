import React ,{Component} from 'react';
import Aux from '../../../hoc/Auxilary'
import Button from '../../ui/button/button'

class  Ordersummary extends Component{

      //this can be a functional component and doesnt have to be a class
    render(){
        const summary=Object.keys(this.props.ingredients)
       .map(objkey=>{
           return (<li key={objkey}> <span style={{textTransform:'capitalize'}}>{objkey}</span>:{this.props.ingredients[objkey] }</li>);
       })
        return(
           <Aux> 
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {summary}
            </ul>  
            <p><strong> You have to pay the total of : {this.props.totalprice.toFixed(2)}$</strong></p>  
               <p>Continue to Checkout?</p>
               <Button btnType="Danger" clicked={this.props.closed}>CANCEL</Button>
               <Button btnType="Success" clicked={this.props.continue}>CONTINUE</Button>
    </Aux>);
    }
}



export default Ordersummary;