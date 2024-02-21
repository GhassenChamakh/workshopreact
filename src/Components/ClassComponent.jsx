/* eslint-disable react/prop-types */

import { Component } from 'react';
class ClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            val:"heeloramos",
            obj:{
                valobj:10
            } }
            
       }
    render(){ return ( <>
        <h1> Class Component{this.props.name}</h1>
        <p>{this.state.val}&{this.state.obj.valobj}</p></>)
    }

}
export default ClassComponent ;