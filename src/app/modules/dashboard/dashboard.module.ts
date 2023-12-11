import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FisComponent } from './pages/fis/fis.component';
import { UserManagementComponent } from './components/fis/user-management/user-management.component';
import { ProductManagementComponent } from './components/fis/product-management/product-management.component';
import { CategoryManagementComponent } from './components/fis/category-management/category-management.component';
import { CategoryShowComponent } from './pages/fis/category-show/category-show.component';
// import { ProductComponent } from '../product/product.component';
import { ProductListComponent } from './components/fis/product-management/product-list/product-list.component';
import { ProductFormComponent } from './components/fis/product-management/product-form/product-form.component';
import { ProductSummaryComponent } from './components/fis/product-management/product-summary/product-summary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './components/fis/product-management/product-detail/product-detail.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FisComponent,
    UserManagementComponent,
    ProductManagementComponent,
    CategoryManagementComponent,
    CategoryShowComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductSummaryComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ],
})
export class DashboardModule {}
