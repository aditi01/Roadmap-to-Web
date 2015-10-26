//for displaying "Hello Aditi" within the HelloMessage component
var HelloMessage = React.createClass({ //creates a container HelloMessage, which has key value format. the variables in reactJS is always written in camel-case with the 1st letter being in upper-case
	render: function() {
		return (
			<div> Hello {this.props.name} </div> //this.props is used tto access any data that is passed into the component, in this case HelloMessage
		);
	}
});

ReactDOM.render(<HelloMessage name="Aditi"/>, document.getElementById("container")); //1.

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

/*1. ReactDOM provides all the dom-specific methods. This renders the react element into the container and returns the reffereence to the component. This controls the content that
is displayed in the browser, by rendering the desired output into the reffered DOM.

2. The life-cycle of the functions used in this code is: 1st getInitialState is executed, then render function and then componentDidMount. setState function automatically calls
the render function after it gets executed.

3. sets the state of "secondsElapsed" from the 2nd to the nth iteration, which increments the state by 1 in each step and the after each increment it automatically calls the
 render function hence after each increment, the new state is displayed in the broswer. */