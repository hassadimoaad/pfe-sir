import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaxCreateComponent } from './view/tax/tax-create/tax-create.component';
import { TaxListComponent } from './view/tax/tax-list/tax-list.component';
import { CreatEmplyerComponent } from './view/employer/creat-emplyer/creat-emplyer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployerListComponent } from './view/employer/employer-list/employer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaxCreateComponent,
    TaxListComponent,
    CreatEmplyerComponent,
    EmployerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
