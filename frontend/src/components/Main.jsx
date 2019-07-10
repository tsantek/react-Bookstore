import React, { Component } from 'react';

import Books from './Books';
// import Search from './Search';

class Main extends Component {
    constructor(props){
        super(props)
        this.state = { 
            search : "",
            btn: 0
             }
        
    }
   
    handlSearchStateUpdate(value){
        this.setState({ search : value.target.value})
    }

    handleButtonBook(){
        this.setState({
           btn: 1
        })
    }

    handleButtonAuthor(){
        this.setState({
           btn: 0
        })
    }

    render() { 
        // console.log(this.props.books)
        // const { search } = this.state;
        // const lowercasedFilter = search.toLowerCase();
        // const filteredData = this.props.books.filter(item => {
        //   return Object.keys(item).some(key =>
        //     item[key].includes(lowercasedFilter)
        //   );
        // });

           let searchedBook = this.props.books.filter( item => {
                // return item.title.includes(this.state.search) 
                return item.title.indexOf(this.state.search) !== -1; 
            })

            searchedBook = this.props.books.filter( item => {
                // return item.title.includes(this.state.search) 
                return item.author.indexOf(this.state.search) !== -1; 
            })

       return (
        <div>
                <div className="input-group search">
                    
                    <div className="input-group-append" id="button-addon4">
                        <button onClick={() => this.handleButtonBook()} className="btn btn-outline-secondary" type="button">Search Books</button>
                        <button onClick={() => this.handleButtonAuthor()} className="btn btn-outline-secondary" type="button">Search Authors</button>
                     </div>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <select className="btn btn-outline-secondary dropdown-toggle">
                    <option className="dropdown-item" href="#">Book</option>
                    <option className="dropdown-item" href="#">Author</option>
                    </select>
                </div>
                    <input type="text" className="form-control" placeholder="Search" onChange={(e) => this.handlSearchStateUpdate(e)}/>
                </div>

                 {/* <Search handlSearchState={this.handlSearchStateUpdate} /> */}
                 <Books books={searchedBook}  AddToCart={this.props.AddToCart}/>
        </div>
         )
    }
}


// /////////////////
// className Main extends React.Component {
//     state = {
//       filter: "",
//       data: [
//         {
//           fname: "Jayne",
//           lname: "Washington",
//           email: "jaynewashington@exposa.com",
//           gender: "female"
//         },
//         {
//           fname: "Peterson",
//           lname: "Dalton",
//           email: "petersondalton@exposa.com",
//           gender: "male"
//         },
//         {
//           fname: "Velazquez",
//           lname: "Calderon",
//           email: "velazquezcalderon@exposa.com",
//           gender: "male"
//         },
//         {
//           fname: "Norman",
//           lname: "Reed",
//           email: "normanreed@exposa.com",
//           gender: "male"
//         }
//       ]
//     };
  
//     handleChange = event => {
//       this.setState({ filter: event.target.value });
//     };
  
//     render() {
//       const { filter, data } = this.state;
//       const lowercasedFilter = filter.toLowerCase();
//       const filteredData = data.filter(item => {
//         return Object.keys(item).some(key =>
//           item[key].toLowerCase().includes(lowercasedFilter)
//         );
//       });
  
//       return (
//         <div>
//           <input value={filter} onChange={this.handleChange} />
//           {filteredData.map(item => (
//             <div key={item.email}>
//               <div>
//                 {item.fname} {item.lname} - {item.gender} - {item.email}
//               </div>
//             </div>
//           ))}
//         </div>
//       );
//     }
//   }
  
 
export default Main ;