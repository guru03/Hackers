import { createReducer } from "@ngrx/store";
import { initialState } from "./questions.state";


const _questionReducer = createReducer(initialState);

export function questionReducer(state = initialState, action: any) {
    return _questionReducer(state, action);
}