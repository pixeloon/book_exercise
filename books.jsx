
// create rows

var BookRow = React.createClass({

handleStock: function(event) {

  this.props.updateStock(this.props.index, e.target.value);
  
},

render: function(){


        return <tbody>
                    <tr class="row1">
              <td>
                <img src="https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg" width="100" />
              </td>
              <td>
                <div class="title">A Game of Thrones</div>
                <div>By George R. R. Martin</div>
                <div>Published in 1996</div>
                <div>ISBN 978-0553103547</div>
              </td>
              <td>
                <input type="button" value="-" />
                <label class="show">7</label>
                <input class="hide" maxlength="4" size="4" type="text" value="7" />
                <input type="button" value="+" />
              </td>
            </tr>
            <tr class="row0">
              <td>
                <img src="https://upload.wikimedia.org/wikipedia/en/d/d5/Snowcrash.jpg" width="100" />
              </td>
              <td>
                <div class="title">Snow Crash</div>
                <div>By Neal Stephenson</div>
                <div>Published in 1992</div>
                <div>ISBN 978-1491515051</div>
              </td>
              <td>
                <input type="button" value="-" />
                <label class="show">3</label>
                <input class="hide" maxlength="4" size="4" type="text" value="3" />
                <input type="button" value="+" />
              </td>
            </tr>
            <tr class="row1">
              <td>
                <img src="https://upload.wikimedia.org/wikipedia/en/c/c3/The_Martian_2014.jpg" width="100" />
              </td>
              <td>
                <div class="title">The Martian</div>
                <div>By Andy Weir</div>
                <div>Published in 2014</div>
                <div>ISBN 978-0804139021</div>
              </td>
              <td>
                <input type="button" value="-" />
                <label class="show">11</label>
                <input class="hide" maxlength="4" size="4" type="text" value="11" />
                <input type="button" value="+" />
              </td>
            </tr>
            </tbody>;

}
  
});

// create Books component
var Books = React.createClass({
  getInitialState: function() {
  return {
    books: [{
      author: 'George R. R. Martin',
      cover: 'https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg',
      isbn: '978-0553103547',
      stock: 7,
      title: 'A Game of Thrones',
      year: 1996
    }, {
      author: 'Neal Stephenson',
      cover: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Snowcrash.jpg',
      isbn: '978-1491515051',
      stock: 3,
      title: 'Snow Crash',
      year: 1992
    }, {
      author: 'Andy Weir',
      cover: 'https://upload.wikimedia.org/wikipedia/en/c/c3/The_Martian_2014.jpg',
      isbn: '978-0804139021',
      stock: 11,
      title: 'The Martian',
      year: 2014
    }]
  };
},

  updateStock: function(index, val) {
    // find the book whose stock you want to update
    // update the stock
    // setState
  },


render: function(){


  return <div class="books">
        <h1>Books Inventory</h1>
        <table>
          <thead>
            <tr>
              <th>Cover</th>
              <th>Description</th>
              <th>Stock</th>
            </tr>
          </thead>
            <BookRow/>

        </table>
      </div>;

}

});



ReactDOM.render((<Books/>),document.getElementById('container'));
