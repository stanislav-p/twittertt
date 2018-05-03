import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';

import { SearchService } from './services/search.service';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [SearchService, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
