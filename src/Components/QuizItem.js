import React from "react";
import { Link } 
    from "react-router-dom";

class QuizItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: this.props.point * 5,
            answer: ""
        }
        this.userInput = this.userInput.bind(this);
    }
    userInput(e) {
        this.setState({
            answer: e.target.value 
        })               
    }
    componentDidMount() {
        this.interval = setInterval(() => 
                            this.tick(),1000
                            );
    }
    tick() {
        this.setState((prevState) => 
                        ( {timer: prevState.timer - 1 } )                  
                    );
        if( this.state.timer === 0) {
            clearInterval(this.interval);
            this.props.updateScore(this.state.answer);
        }
    }    
    render() {
        return(
            <div>
                {this.props.completed ? (
                    <Link to={`/resultPage/${this.props.userName}/${this.props.score}`}>
                        <div className="resultBtn">
                            <button className="btn btn-block">Check result</button>
                        </div>
                        
                    </Link>
                    ) : (
                    <div>
                        <div className = "timer">
                            {this.state.timer}
                        </div>
                        <div className="card-group p-4 m-auto" 
                            style={{ width: "60%" }}>
                            <div className="card">
                                <div className="card-body pl-5">                
                                    <h3 className="card-title text-center">
                                        No. {this.props.id}
                                    </h3>
                                    <hr />
                                    <h4 className="card-text text-center">
                                        {this.props.question}
                                    </h4>
                                    <div className="input-group">
                                        <div >{this.props.answers.map(ans =>
                                            <div className="input-group-text userInp"> 
                                            <input type = "radio" 
                                                   value = {ans} 
                                                   name = "answers" 
                                                   onChange = {this.userInput} />
                                            {ans}
                                            </div>)}
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer p-2 border-0 ">
                                    <div className="text-right">
                                        <span>
                                            <strong>
                                                {this.props.point} point/s
                                            </strong>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                 
                )}                
            </div>
            )
    }
}

export default QuizItem;