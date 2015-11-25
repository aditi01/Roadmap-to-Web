
//A simple and a basic TODO application

var TodoList = React.createClass({
	deleteTodo: function() {
		var that = this;
		that.props.deleteText();
	},

	render: function() {
		var that = this;
		var text = this.props.text;
		var items = text.map( function(todo) {
			return (
				<div>
					<li> {todo.content +" "+ todo.date} </li>
					<input type = "button" value="X" onClick = {that.deleteTodo.bind(that, [_id])} />
				</div>
			);
		});

		return (
				<ul> {items} </ul>
		);
	}
});


var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			todoItems: []
		};
	},
	
	getRequest: function() {
		var that = this;
		$.ajax({
		type: 'GET',
		url: '/todos',
		dataType: "json",
		success: function(result) {
			console.log(result);
			that.setState({todoItems: result.output});
		},
		error: function(err) {
			console.log(err);
			document.getElementById("todo-container").innerHTML = "Data not retrieved";
		}
	});
	},

	addText: function() {
		var todo = document.getElementById("input-data");
		var items = this.state.todoItems;
		items.push({content: todo.value, date: new Date()});
		// this.setState({todoItems: items});
		console.log(todo.value);
		var that = this;

		$.ajax({
		type: "POST",
		url: "/todo/save",
		data: {content:todo.value, date: new Date()},
		success: function(result) {
			console.log(result);
			that.getRequest();
		},
		dataType: "json",
		error: function(err) {
			console.log(err);
		}
	});
		todo.value = "";
	},

	deleteText: function() {
		$.ajax({
		type: "POST",
		url: "/todo/delete",
		data: {ObjectID: _id},
		success: function(result) {
			console.log(result);
			that.getRequest();
		},
		dataType: "json",
		error: function(err) {
			console.log(err);
		}
	});
	},

	componentDidMount: function() {
		this.getRequest();
	},

	render: function() {
		return (
			<div>
				<TodoList text= {this.state.todoItems} />
				<input type="text" id="input-data"/>
				<input type = "button" value="Submit" onClick = {this.addText}/>
			</div>
		);
	}

});
// var fullName = 'aditi lahiri'
ReactDOM.render(<TodoApp/>, document.getElementById("todo-container"));

/*1. ReactDOM provides all the dom-specific methods. This renders the react element into the container and returns the reffereence to the component. This controls the content that
is displayed in the browser, by rendering the desired output into the reffered DOM.

2. The life-cycle of the functions used in this code is: 1st getInitialState is executed, then render function and then componentDidMount. setState function automatically calls
the render function after it gets executed.

3. sets the state of "secondsElapsed" from the 2nd to the nth iteration, which increments the state by 1 in each step and the after each increment it automatically calls the
 render function hence after each increment, the new state is displayed in the broswer. */