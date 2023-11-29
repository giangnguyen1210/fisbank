import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FisComponent } from './pages/fis/fis.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard], // Apply the AuthGuard to the DashboardComponent
    children: [
      { path: '', redirectTo: 'fis', pathMatch: 'full' },
      { path: 'fis', component: FisComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
