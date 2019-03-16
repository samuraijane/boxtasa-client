import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
