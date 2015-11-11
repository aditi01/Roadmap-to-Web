//for displaying "Hello Aditi" within the HelloMessage component
var HelloMessage = React.createClass({ //creates a container HelloMessage, which has key value format. the variables in reactJS is always written in camel-case with the 1st letter being in upper-case
	render: function() {
		return (
			<div> Hello {this.props.name} </div> //this.props is used tto access any data that is passed into the component, in this case HelloMessage
		);
	}
});

ReactDOM.render(<HelloMessage name="Aditi"/>, document.getElementById("container")); //1.

//Example to display the amount of seconds that were ellapsed after the page was loaded on the browser.

var Timer = React.createClass({ //2.
	getInitialState: function() { //is executed 1st, which returns the initial state, i.e., 0
		return {secondsElapsed: 0};
	},
	tick: function() {
		this.setState({secondsElapsed: this.state.secondsElapsed+ 1 }); //3.
	},
	componentDidMount: function() {
		setInterval(this.tick, 1000); // setInterval is a function which gets executed after the number of ms mentioned as the 2nd parameter, in this case 1000ms--> 1s
	},
	render: function() {
		return (
			<div> Seconds Elapsed {this.state.secondsElapsed} </div>
		);
	}
});

ReactDOM.render(<Timer/>, document.getElementById("timer-container"));

//A simple and a basic TODO application

var TodoList = React.createClass({
	myFunction: function(greeting){
		console.log(greeting);
	},
	render: function() {
		var text = this.props.text;
		var items = text.map( function(todo) {
			return (
				<li> {todo.content +" "+ todo.date} </li>
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
	
	addText: function(event) {
		this.refs.todoListOne.myFunction('good morning');
		console.log(this.props.firstname)
		console.log(event.currentTarget);
		var todo = document.getElementById("input-data");
		var items = this.state.todoItems;
		items.push({content: todo.value, date: new Date()});
		this.setState({todoItems: items});
		todo.value = "";
	},

	render: function() {
		console.log(this.props.lastname)
		return (
			<div>
				Welcome, {this.props.firstname+" "+this.props.lastname}
				<TodoList text= {this.state.todoItems} ref="todoListOne"/>
				// <TodoList text= {this.state.todoItems} ref="todoListTwo"/>
				<input type="text" id="input-data"/>
				<input type = "button" value="Submit" onClick = {this.addText}/>
			</div>
		);
	}

});
var fullName = 'aditi lahiri'
ReactDOM.render(<TodoApp firstname='aditi' lastname="lahiri"/>, document.getElementById("todo-container"));

/*1. ReactDOM provides all the dom-specific methods. This renders the react element into the container and returns the reffereence to the component. This controls the content that
is displayed in the browser, by rendering the desired output into the reffered DOM.

2. The life-cycle of the functions used in this code is: 1st getInitialState is executed, then render function and then componentDidMount. setState function automatically calls
the render function after it gets executed.

3. sets the state of "secondsElapsed" from the 2nd to the nth iteration, which increments the state by 1 in each step and the after each increment it automatically calls the
 render function hence after each increment, the new state is displayed in the broswer. */