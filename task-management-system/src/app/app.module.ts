import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskTabComponent } from './components/task-tab/task-tab.component';
import { TopContainerComponent } from './components/top-container/top-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
// import {ToastrModule, ToastrService} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    TaskTabComponent,
    TopContainerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        // ToastrModule.forRoot(),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
