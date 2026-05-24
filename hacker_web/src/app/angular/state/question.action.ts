import { createAction, props } from '@ngrx/store';
import { QuestionInterface } from './questions.state';

export const loadQuestions = createAction('[Questions] Load Questions');

export const loadQuestionsSuccess = createAction(
    '[Questions] Load Questions Success',
    props<{ questions: QuestionInterface[] }>()
);


export const loadQuestionsFailure = createAction(
    '[Questions] Load Questions Failure',
    props<{ error: any }>()
);