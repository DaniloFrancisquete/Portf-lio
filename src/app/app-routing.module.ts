import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'painel'},
  { path: 'apresentacao', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) },
  { path: 'painel', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'cursos', loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule) },
  { path: 'experiencias', loadChildren: () => import('./pages/teachers/teachers.module').then(m => m.TeachersModule) },
  { path: 'formacao', loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule) },
  { path: 'projeto', loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
