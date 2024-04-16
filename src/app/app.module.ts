
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDataGridModule, DxFilterBuilderModule, DxBulletModule  } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxFilterBuilderModule,
    FormsModule,
    DxBulletModule 
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
