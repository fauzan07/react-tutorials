import React, { Component } from 'react'
const MyContext = React.createContext();

//event handler in react
class ListRendering extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dish : [
          {id : 1, name : "pizza", price : "400rs"},
          {id : 2, name : "burger", price : "400rs"},
          {id : 3, name : "Fries", price : "200rs"},
          {id : 4, name : "Fries", price : "200rs"},
          {id : 5, name : "Fries", price : "200rs"},
          {id : 6, name : "Fries", price : "200rs"},

        ]
      };
    }


    render() {

      const { dish } = this.state;
      return (
        <div>
             <MyContext.Consumer>
            {data => <p>Data from context: {data}</p>}
          </MyContext.Consumer>
          <h1>Hello state</h1>
            {/* <ul>
                <li>Dish name is {this.state.dish[0].name}, Price is {this.state.dish[0].price}</li>
                <li>Dish name is {this.state.dish[1].name}, Price is {this.state.dish[1].price}</li>
                <li>Dish name is {this.state.dish[2].name}, Price is {this.state.dish[2].price}</li>
            </ul> */}

            <ul>
              {dish.map((item)=>{
                return(
                  <li key={item.id}>Dish name is {item.name}, Price is {item.price}</li>
                )
              })}
            </ul>
        </div>
      );
    }
  }

  export default ListRendering