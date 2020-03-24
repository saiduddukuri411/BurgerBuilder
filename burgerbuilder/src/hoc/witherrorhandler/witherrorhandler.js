import React, { Component } from "react";
import Aux from "../Auxi/Auxilary";
import Model from "../../components/ui/model/model";

const witherrorhandler = (Wrappedcomponent, axios) => {
  return class extends Component {
      state={
          error:null,

      }
      errorCOnformedHandler=()=>{
          this.setState({error:null})
      }
      componentWillMount(){
          this.reqIntercetor=axios.interceptors.request.use(req=>{
            this.setState({error:null});
            return req;
          })
          this.resIntercetor= axios.interceptors.response.use(res=>res,error=>{
              this.setState({error:error});
          });
      }
      componentWillUnmount(){
         axios.interceptors.request.eject(this.reqIntercetor);
         axios.interceptors.response.eject(this.resIntercetor);
      }
    render() {
      return (
        <Aux>
          <Model show={this.state.error} closemodel={this.errorCOnformedHandler}>
              {this.state.error ? this.state.error.message: null}
              </Model>
          <Wrappedcomponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default witherrorhandler;
