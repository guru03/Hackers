// import { createReducer } from "@ngrx/store";
// import { initialState } from "./questions.state";


// const _questionReducer = createReducer(initialState);

// export function questionReducer(state = initialState, action: any) {
//     return _questionReducer(state, action);
// }



// src/app/state/question.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as QuestionActions from './question.action';
import { QuestionInterface } from './questions.state';

export interface QuestionState {
  questions: QuestionInterface[];
  error: any;
}

export const initialState: QuestionState = {
  questions: [],
  error: null
};

export const questionReducer = createReducer(
  initialState,
  on(QuestionActions.loadQuestionsSuccess, (state, { questions }) => ({
    ...state,
    questions,
    error: null
  })),
  on(QuestionActions.loadQuestionsFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
