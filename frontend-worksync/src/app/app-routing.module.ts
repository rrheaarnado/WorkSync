import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'employee', component: EmployeeComponent },
  {path: 'department', component: DepartmentComponent},
  {path: 'project', component: ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
