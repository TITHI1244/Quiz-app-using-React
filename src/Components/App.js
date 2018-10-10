import React from "react";
import Header from "./Header";
import QuizView from "./QuizView";
import ResultPage from "./ResultPage";
import { BrowserRouter as Router, Switch, Route } 
    from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className = "container-fluid">
                    <div className="jumbotron text-center mt-3">
                        <h3 className="m-auto">Quiz App Demo</h3>        
                    </div>
                    <Switch>
                        <Route exact path="/" 
                            component={Header} />
                        <Route path="/quizView/:userName" 
                            component={QuizView} />
                        <Route path="/resultPage/:userName/:score" 
                            component={ResultPage} />          
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
