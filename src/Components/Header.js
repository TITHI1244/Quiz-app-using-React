import React from "react";
import { Link } 
    from "react-router-dom";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: ""
		}
		this.getName = this.getName.bind(this);
	}
	getName(e) {
		let nameOfUser = document.getElementById('nameVal');
		this.setState({
				userName: nameOfUser.value
		})		
	}
	render() {
		return (			
			<div className="start border mt-3 p-2">
				{(this.state.userName === "") ? 
					(
		    		<form onSubmit={this.getName}>
		    			<div className="input-group mb-3">
		      				<div className="input-group-prepend">
		        				<span className="input-group-text">Name:</span>
		      				</div>
		      				<input type="text" 
		      						class="form-control" 
		      						placeholder="Please enter your name here..." 
		      						id="nameVal" 
		      						name="username" required/>
		    			</div>
		    			<button type="submit" class="btn btn-primary">Submit</button>
		  			</form>
		  			) : ( <div>
				  			<h1 className="text-center text-uppercase welcome">
				  				Welcome '{this.state.userName}'
				  			</h1>
				  			<div className="startBtn">
								<Link to={`/quizView/${this.state.userName}`}>
						        	<button className="btn btn-block">Start now</button>
						        </Link>
						    </div>
				    	</div> )
				} 
			</div>
			)
	}
}

export default Header;
