import React, {Component} from 'react';
import Product from './Product/Product.js'


class Dashboard extends Component {
    constructor(){
        super();

    }


    render(){
         let inventory = this.state.inventory.map( ( element, index) => {
             return (
                 <inventory key={index} task={ element }/>
                
             )
             
         })   
        return(
        <div>
        <Dashboard/>
        </div>
        )
    }
}

export default Dashboard;