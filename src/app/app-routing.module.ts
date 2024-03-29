import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'employee', component: EmployeeComponent,canActivate:[loginGuard]
  },
  
  { path: 'login', component: LoginComponent },
  {path: 'rooms',
  loadChildren: 
  () => import('./rooms/rooms/rooms.module').then(m => m.RoomsModule),
  canActivate:[loginGuard],}
  //  all paths should be declared above the wildcard route 
  ,{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'booking/:roomId', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
  canActivate:[loginGuard], },
  { path: 'comments', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  { path: '**', component: NotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
