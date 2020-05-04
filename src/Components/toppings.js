// import React, {Component} from 'react';

// export default class Toppings extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             'toppings' :{
//                 'pepperoni': false,
//                 'suasage': false,
//                 'Bacon' : false,
//                 'Pineapple': false,
//                 'Chicken' : false,
//                 'Onions' : false,
//                 'Green Peppers' : false,
//                 'Green Olives' : false,
//                 'Extra Cheese' : false,
//             },
//         }
//     }

//     render() {
//         return (
//             <form onSubmit={this.onFormSubmit.bind(this)}>
//                 {this.renderToppings() }
//                 <input type="submit" value="Save Favorite Foods" />
//             </form>
//         )
//     };
//     renderToppings() {
//         const toppings = ['pepperoni', 'sausage', 'Bacon', 'Pineapple', 'Chicken', 'Onions', 'Green Peppers', 'Green Olives', 'Extra Cheese' ]

//         return toppings.map((topping, i) => {
//             return (
//                 <label key={i}>
//                     {topping}
//                     <input
//                     type="checkbox"
//                     name={topping}
//                     onChange={this.toppingChange.bind(this)}
//                     value={this.state.toppings[topping]}
//                     />
//                 </label>
//             )
//         })
//     }

//     toppingChange(e) {
//         const val = e.target.checked;
//         const name = e.target.name;
//         let updatedToppings = Object.assign({}, this.state.toppings, {[name] :val})
//         this.setState({
//             'toppings': updatedToppings
//         })
//     }
//     onFormSubmit(e) {
//         e.preventDefault();
//         console.log('toppings', this.state.toppings);
//     }
// }