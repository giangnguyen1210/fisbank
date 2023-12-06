import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FisComponent } from './pages/fis/fis.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ProductComponent } from '../product/product.component';
import { ProductFormComponent } from './components/fis/product-management/product-form/product-form.component';
import { ProductManagementComponent } from './components/fis/product-management/product-management.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard], // Apply the AuthGuard to the DashboardComponent
    children: [
      { path: '', redirectTo: 'fis', pathMatch: 'full' },
      { path: 'fis', component: FisComponent },
      {path: 'product', component: ProductManagementComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
