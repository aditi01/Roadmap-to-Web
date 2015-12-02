var Todo = React.createClass({

	getInitialState: function() {
		return {editing: false}
	},

	edit: function() {
		this.setState({editing: true});
	},

	todoDisplay: function() {
			 return(
				<li className = "todo"> 
					<span onClick = {this.edit}>
						{this.props.children}
					</span>
					<button className = "btn btn-default btn-sm glyphicon glyphicon-trash pull-right" />
				</li>		
		);
	},
	save: function() {
		var val = this.refs.newValue.getDOMNode().value;
		alert('Todo'+ val +' saved');
		this.setState({editing: false});
	},

	todoForm: function() {
			 return(
				<li className = "todo"> 
					<span>
						<input type="text" placeholder = "Edit the Todo" ref = "newValue" defaultValue = {this.props.children} />
					</span>
					<button onClick={this.save} className = "btn btn-default btn-sm glyphicon glyphicon-floppy-disk pull-right" />
				</li>		
		);
	},
	render: function() {
		if(this.state.editing) {
			return this.todoForm();
		}
		else {
			return this.todoDisplay();
		}
	},
});


var TodoList = React.createClass({
	getInitialState: function() {
		return{
			todos: ['Hello Aditi!',
					'Hello Ashwin!']
		}
	},

	render: function() {
			return (<div> 
				<h1> Things To Do </h1>
				<div className = "form-inline">
					<div className = "form-group">
						<input className = "form-control" placeholder='To Do' />
						<button className = "btn btn-sm btn-default">+</button>
					</div>
				</div>
			<ul>
				{this.state.todos.map(function (todo) {
					return (<Todo> {todo} </Todo>);
				})
			}
			</ul>

			</div>);
		}
});

React.render(<TodoList />, document.getElementById('todo'));