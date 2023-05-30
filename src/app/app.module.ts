import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { ConexionComponent } from './conexion/conexion.component';




@NgModule({
  declarations: [
    AppComponent,
    ConexionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TreeViewModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
