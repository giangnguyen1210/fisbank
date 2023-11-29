import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';


// const routes: Routes = [
//   {
//     path: '',
//     component: AuthComponent,
//     children: [
//       { path: '', pathMatch: 'full', redirectTo:'sign-in' },
//       { path: 'sign-in', pathMatch: 'full', component: SignInComponent },
//       { path: 'sign-up', component: SignUpComponent },
//     ],
//   },
// ];


// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class AuthRoutingModule {}
const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
      { path: 'sign-in', pathMatch: 'full', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
