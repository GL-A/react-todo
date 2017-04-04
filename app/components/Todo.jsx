var React = require('react');

var Todo = React.createClass({
  render: function(){
    //es6 destructoring..can grab specified properties from props
    var {text, id} = this.props;
    return (
      <div>
        {id}. {text}
      </div>
    )
  }
})

module.exports = Todo;
