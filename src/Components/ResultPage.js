import React from "react";
import QuizView from "./QuizView";

const ResultPage = ({match}) => (
    <div className="result text-center">
    	{(match.params.score < 5) ? 
    		(<div>
    			<h1> Good try, {match.params.userName}! </h1> <br />
    		 	<h2>But you can do better.</h2>
    		 </div>) : 
    		(<div>
    			<h1>Great job, {match.params.userName}! </h1> <br /> 
    		 	<h2>You are a star.</h2>
    		</div>)}        
        <h3>Your score: {match.params.score}</h3>        
    </div>
);

export default ResultPage;