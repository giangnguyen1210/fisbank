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
import { UserListComponent } from './components/fis/user-management/user-list/user-list.component';
import { UserSummaryComponent } from './components/fis/user-management/user-summary/user-summary.component';
import { UserFormComponent } from './components/fis/user-management/user-form/user-form.component';
import { UserDetailComponent } from './components/fis/user-management/user-detail/user-detail.component';

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
    ProductDetailComponent,
    UserListComponent,
    UserSummaryComponent,
    UserFormComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ],
})
export class DashboardModule {}
