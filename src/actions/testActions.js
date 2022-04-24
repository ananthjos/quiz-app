import { GET_TEST_DETAILS } from "./types";

const url = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`;


export let  getMCQOptions = (results)=>{
   let options = [];
   let mcq = {
      
   }
   for(let i=0;i<results.length;i++){
        mcq.id = i+1;
        mcq.question = results[i].question;
          mcq.option1 = results[i].incorrect_answers[0];
          mcq.option2 = results[i].incorrect_answers[1];
          mcq.option3 = results[i].incorrect_answers[2];
          mcq.option4 = results[i].correct_answer;
          options.push(mcq);
        mcq= {};
   }
   return options;
  }

// API call to get test details
export const getTestDetails = ()=>async(dispatch)=>{
      try {
         let response = await fetch(`${url}`)
         let data = await response.json();
         data.results =  getMCQOptions(data.results)
         dispatch({type:GET_TEST_DETAILS,payload:data.results})
      } catch (error) {
        
      }
}