import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from '../products/componenets/all-products/all-products.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { ProductComponent } from '../products/componenets/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    AllProductsComponent,
    SpinnerComponent,
    SelectComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    AllProductsComponent,
    SpinnerComponent,
    SelectComponent,
    ProductComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
