import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuestionsState } from "./questions.state";

const selectQuestionState = createFeatureSelector<QuestionsState>('questions');

export const selectQuestions = createSelector(
  selectQuestionState, (state: QuestionsState) => {
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