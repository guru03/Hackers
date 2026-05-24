// src/app/state/question.effects.ts
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as QuestionActions from './question.action';
import { QuestionInterface } from './questions.state';

@Injectable()
export class QuestionEffects {
  private actions$ = inject(Actions);
  private http = inject(HttpClient);

  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionActions.loadQuestions),
      mergeMap(() =>
        this.http.get<QuestionInterface[]>('http://localhost:8000/api/angulars/').pipe(
          map(questions => QuestionActions.loadQuestionsSuccess({ questions })),
          catchError(error => of(QuestionActions.loadQuestionsFailure({ error })))
        )
      )
    )
  );
}
