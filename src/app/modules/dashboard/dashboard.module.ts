import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FisComponent } from './pages/fis/fis.component';
import { UserManagementComponent } from './components/fis/user-management/user-management.component';
import { ProductManagementComponent } from './components/fis/product-management/product-management.component';
import { CategoryManagementComponent } from './components/fis/category-management/category-management.component';
import { CategoryShowComponent } from './pages/fis/category-show/category-show.component';
import { ProductListComponent } from './pages/fis/product-list/product-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FisComponent,
    UserManagementComponent,
    ProductManagementComponent,
    CategoryManagementComponent,
    CategoryShowComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
