import { GET_TEST_DETAILS, EVALUATE_TEST, TOTAL_CHOICES} from "./types";

const url = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`;

const url2 = "http://localhost:4000";

export let getMCQOptions = (results) => {
  let options = [];
  let mcq = {};
  for (let i = 0; i < results.length; i++) {
    mcq.id = i + 1;
    mcq.question = results[i].question;
    mcq.option1 = results[i].incorrect_answers[0];
    mcq.option2 = results[i].incorrect_answers[1];
    mcq.option3 = results[i].incorrect_answers[2];
    mcq.option4 = results[i].correct_answer;
    options.push(mcq);
    mcq = {};
  }
  return options;
};

// API call to get test details
export const getTestDetails = () => async (dispatch) => {
  try {
    let response = await fetch(`${url}`);
    let data = await response.json();
    localStorage.setItem('questions',JSON.stringify(data.results));
    data.results = getMCQOptions(data.results);

    dispatch({ type: GET_TEST_DETAILS, payload: data.results });
  } catch (error) {}
};

// to reset questions array data from API
let totalChoices = [];
export const geTotalMcqChoices = (questionId, choice) => async (dispatch) => {
  let foundChoice = totalChoices.find((item) => item.id === questionId);

  if (foundChoice) {
    totalChoices.forEach((item) => {
      if (item.id === questionId) {
        item.answer = choice;
      }
    });
  } else {
    totalChoices.push({ id: questionId, answer: choice });
  }
  console.log(totalChoices);
  dispatch({ type: TOTAL_CHOICES, payload: totalChoices });
};

// method to evaluate test based on user choices
export const evaluateTest = (totalChoicesByCandidate) => async (dispatch) => {
  let score = calculateScore(totalChoicesByCandidate);
 
  console.log(score);
  dispatch({ type: EVALUATE_TEST, payload: score });
};


function calculateScore(totalChoicesByCandidate) {
  let response = JSON.parse(localStorage.getItem("questions"));
  let score = [];

  for (let i = 0; i < totalChoicesByCandidate.length; i++) {
    score = response.filter(item=>{
        if(item.correct_answer == totalChoicesByCandidate[i].answer){
          return item;
        };
    });
  }
  return score.length;
}

