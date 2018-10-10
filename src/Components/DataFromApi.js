import React from "react";
import ApiQuizData from "../data/ApiQuizData";

import fetch from "cross-fetch";

const ApiData = [];
const optionArr = [];

class DataFromApi extends React.Component {
constructor(props){
    super(props);

    this.state = {
        allFromApi: [],
        Data : [],
        isLoading: false
    }

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() { 
    this.setState({isLoading:true});

    fetch("https://opentdb.com/api.php?amount=4&category=9&difficulty=easy&type=multiple")
       
        .then(api_result => {

            if (api_result >= 400 || !api_result.ok) {
                // console.log(api_result);
                throw new Error("Fejl i svar fra server");
            }

            return api_result.json();
        })
       
        .then(allFromApi => {

            // console.log(overskrifter);
            
            this.setState({
                allFromApi:allFromApi.results,
                isLoading: false
            });
        })
        
        .catch(error => {
            alert(error);
        })


    };

  render() {
    // for(var i = 0; i < 4; i++) {
    //         ApiData.push(id : i + 1);
    //         console.log(ApiData);
            // this.state.Data.push({question: this.state.overskrifter[i].question});
            // this.state.Data.push({
            //     options: this.state.overskrifter[i]
            //             .incorrect_answers.map(opt => {
            //                 return(
            //                     optionArr.push(opt)
            //                     )
            //             })
            //             })
            // this.state.Data.push({answer: this.state.overskrifter[i].correct_answer});
            // this.state.Data.push({point: "1"})
            
        // }
    return (
      <div className="App">
        Hejsa<br/>

        {this.state.isLoading? "Henter data" : "" }

        

        <button onClick={this.handleClick}>Klik for at hente data</button>
        
            
                return (
                    <ApiQuizData 
                        apiResult = {this.state.allFromApi}
                    />                    
                    )
           
           

      </div>
    );
  }
}

export default DataFromApi;
