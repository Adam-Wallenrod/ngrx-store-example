import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {MyCounterComponent} from './my-counter/my-counter.component';
import {appReducers} from './app.reducer';
import {FormsModule} from '@angular/forms';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {MovieEffects} from './movie.effects';
import {MoviesService} from './movie.servie';
import { MyObservableComponent } from './my-observable/my-observable.component';
import { MyCallbacksComponent } from './my-callbacks/my-callbacks.component';


@NgModule({
  declarations: [AppComponent, MyCounterComponent, MyObservableComponent, MyCallbacksComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([MovieEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    FormsModule,
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
