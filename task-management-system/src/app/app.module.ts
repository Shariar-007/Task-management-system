import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskTabComponent } from './components/task-tab/task-tab.component';
import { TopContainerComponent } from './components/top-container/top-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskTabComponent,
    TopContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
