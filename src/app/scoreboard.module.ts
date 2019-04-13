import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

@NgModule({
  imports: [StoreModule.forFeature('game', counterReducer)],
})
export class ScoreboardModule {}
