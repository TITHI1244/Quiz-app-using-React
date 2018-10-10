import React from "react";
import QuizItem from "./QuizItem";
import quizitems from "../data/Quiz_items";

class QuizView extends React.Component {
    constructor({match}, props) {
        super({match}, props);
        this.state = {
            idNow: 1, 
            score: 0, 
            done: false,
            userName: match.params.userName
        };
        this.updateScore = this.updateScore.bind(this);
        this.changeState = this.changeState.bind(this);
    }
    changeState() {
        if(this.state.idNow === quizitems.length) {
            this.setState({
                done: true
            });
        }
    }
    updateScore(userInput) {        
        const pointNow = quizitems[this.state.idNow - 1].point;
        const ansNow = quizitems[this.state.idNow - 1].answer;
        this.changeState();
        if(userInput === ansNow) {
            this.setState({
                idNow: this.state.idNow + 1,
                score: this.state.score + parseInt(pointNow)
            });
        } else{
            this.setState({
                idNow: this.state.idNow + 1,
                score: this.state.score
            });
        }         
    }
    render() {
        let itemsNow = quizitems.filter(item => {
            return (item.id === this.state.idNow)
        });
        let itemNow = itemsNow[0];
        return(
            <div>
                { this.state.done ? (
                    <div className="border mt-3 p-2">
                        <QuizItem
                            completed={this.state.done}                    
                            score={this.state.score} 
                            userName={this.state.userName}                   
                        />     
                    </div>
                    ) : (
                    <div className="border mt-3 p-2">                 
                        <QuizItem
                            id={itemNow.id}
                            key={itemNow.id}
                            question={itemNow.question}
                            answers={itemNow.options}
                            point={itemNow.point}
                            completed={this.state.done}
                            updateScore={this.updateScore}
                            score={this.state.score}
                        />             
                    </div>
                    )
                }
            </div>                        
        )
    }
}

export default QuizView;