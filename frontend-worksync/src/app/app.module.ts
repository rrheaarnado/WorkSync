import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartColumn, faFolderOpen, faRightFromBracket, faSitemap, faUsers } from '@fortawesome/free-solid-svg-icons';
import { DepartmentComponent } from './pages/department/department.component';
import { ProjectComponent } from './pages/project/project.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeComponent,
    SidebarComponent,
    DepartmentComponent,
    ProjectComponent,
    TopbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faChartColumn, faUsers, faSitemap, faFolderOpen, faRightFromBracket);
  }
 }