import { Component, signal, ViewEncapsulation, OnInit } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AppState } from '../store/app.state';
import { selectQuestions, selectQuestionsByCategory } from './state/question.selector';
import { QuestionInterface } from './state/questions.state';
import { loadQuestions } from './state/question.action';

@Component({
  selector: 'hkr-angular',
  imports: [AsyncPipe, NgClass],
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
  encapsulation: ViewEncapsulation.None
})
export class Angular implements OnInit {

  activeCategory = signal('All');
  // activeCategory: string = 'All';
  questionList$: Observable<QuestionInterface[]> | undefined;
  scrollProgress = signal(0);

  constructor(private store: Store<AppState>, private sanitizer: DomSanitizer) {
    
  }

  // constructor(private store: Store<{ questions: any }>) {
  //   this.questionList$ = this.store.select(state => state.questions.questions);
  //   this.store.dispatch(QuestionActions.loadQuestions());
  // }

  ngOnInit(): void {
    this.questionList$ = this.store.select(selectQuestions);
    this.store.dispatch(loadQuestions());
  }

  filterByCategory(category: string): void {
    this.activeCategory.set(category);
    this.questionList$ = this.store.select(selectQuestionsByCategory(category));
  }

  // Not using bellow method, just for testing purpose
  filterByCategoryTesting(category: string) {
    this.activeCategory.set(category);
    if (category === 'All') {
      this.questionList$ = this.store.select(selectQuestions);
    } else {
      this.questionList$ = this.store.select(selectQuestions).pipe(
        map(questions => questions.filter((q: QuestionInterface) => q.category === category))
      );
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
