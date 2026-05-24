// import { BlogsState } from "../blogs/state/blogs.state";
// import { CounterState } from "../counter/state/counter.state";

import { QuestionState } from "../angular/state/question.reducer";

export interface AppState {
    // counter: CounterState;
    // blogs: BlogsState;
    questions: QuestionState;
}