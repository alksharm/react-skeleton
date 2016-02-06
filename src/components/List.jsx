var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1, "text":"apple"}, {"id":2, "text":"orange"}, {"id":3, "text":"grapes"}];

var List = React.createClass({
  render: function() {
    var listitems = ingredients.map(function(item) {
      return (<ListItem key={item.id} ingredient={item.text} />);
    });

    return (<ul>{listitems}</ul>);
  }
});

module.exports = List;
