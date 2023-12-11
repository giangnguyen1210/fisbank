import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FisComponent } from './pages/fis/fis.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ProductFormComponent } from './components/fis/product-management/product-form/product-form.component';
import { ProductManagementComponent } from './components/fis/product-management/product-management.component';
import { ProductDetailComponent } from './components/fis/product-management/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard], // Apply the AuthGuard to the DashboardComponent
    children: [
      { path: '', redirectTo: 'fis', pathMatch: 'full' },
      { path: 'fis', component: FisComponent },
      {path: 'product', component: ProductManagementComponent},
      { path: 'product/product-detail/:productId', component: ProductDetailComponent },

    ],
    
  },
  
  // Các routes khác nếu có
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
