import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardOfCommentsComponent } from './board-of-comments/board-of-comments.component';

import { NewCommentsComponent } from './new-comments/new-comments.component';
import {FormsModule} from "@angular/forms";
import {CommsService} from './comms.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardOfCommentsComponent,
    NewCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
