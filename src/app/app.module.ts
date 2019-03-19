import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeDetailComponent } from './code-detail/code-detail.component';
import { CodeListComponent } from './code-list/code-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeDetailComponent,
    CodeListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
