import { Component } from "react";
import Child from "../Child/Child";

class Home extends Component{
  state ={
    userName:"Dawoud",
    product:[{
      name:"Samsung",
      price :"330",
      id:1
    },
    {
      name:"Toshiba",
      price :"379",
      id:2
    },
    {
      name:"Huawei",
      price :"3",
      id:3
    },
    {
      name:"Nokia",
      price :"33",
      id:4
    },
  ],
  savedProducts: [],
}
sendDataToLocalStorage = (index) => {
  const productToSave = this.state.product[index]; 
  const savedProducts = [...this.state.savedProducts]; 
  savedProducts.push(productToSave); 
  this.setState({ savedProducts }); 
  localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
};
deleteProduct = (index) => {
  const savedProducts = [...this.state.savedProducts]; 
  savedProducts.splice(index, 1); 
  this.setState({ savedProducts }); 
  localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
};

  render(){
    return (
      <div className="bg-success p-5">
      <h2>{this.state.userName}</h2>
      <h1>David</h1>
      {this.state.product.map((product,index) => <Child product ={product} index={index} save ={this.sendDataToLocalStorage} delete={this.deleteProduct}/>)}
      </div>
    )
  }
}
export default Home

