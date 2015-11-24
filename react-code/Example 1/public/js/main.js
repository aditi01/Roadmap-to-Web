var Todo = React.createClass({

	render: function() {
	 return(
			<div> 
				<h1> Things To Do </h1>
				<div className = "form-inline">
					<div className = "form-group">
						<input className = "form-control" placeholder='To Do' />
						<button className = "btn btn-sm btn-default">+</button>
					</div>
				</div>

				<ul>
					<li className = "todo"> Hello Aditi </li>
					<li className = "todo"> Find a job </li>
				</ul>
			</div>
		);
	},
});

React.render(<Todo/>, document.getElementById('todo'));