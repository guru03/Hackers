import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuestionState } from "./question.reducer";

const selectQuestionState = createFeatureSelector<QuestionState>('questions');

export const selectQuestions = createSelector(
  selectQuestionState, (state: QuestionState) => {
    return state.questions;
  }
);

export const selectQuestionsByCategory = (category: string) =>
  createSelector(
    selectQuestions,
    (questions) => {
      if (category === 'All') {
        return questions;
      }
      return questions.filter(q => q.category === category);
    }
  );