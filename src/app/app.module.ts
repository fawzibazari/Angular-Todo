import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { TestserviceServiceService } from './service/testservice-service.service';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    XyzComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TestserviceServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
