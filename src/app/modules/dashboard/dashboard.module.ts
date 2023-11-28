import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FisHeaderComponent } from './components/fis/fis-header/fis-header.component';
import { DashboardComponent } from './dashboard.component';
import { FisComponent } from './pages/fis/fis.component';
import { UserManagementComponent } from './components/fis/user-management/user-management.component';
import { CategoryManagementComponent } from './components/fis/category-management/category-management.component';
import { ProductManagementComponent } from './components/fis/product-management/product-management.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FisHeaderComponent,
    FisComponent,
    UserManagementComponent,
    CategoryManagementComponent,
    ProductManagementComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
