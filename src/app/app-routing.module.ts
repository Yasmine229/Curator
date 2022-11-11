import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { ConfigurationComponent } from './configuration/configuration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GrouppolicymanagementComponent } from './grouppolicymanagement/grouppolicymanagement.component';
import { HostsComponent } from './hosts/hosts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ScurityComponent } from './scurity/scurity.component';
import { SystemmonitoringComponent } from './systemmonitoring/systemmonitoring.component';

const routes: Routes = [
  {path:'' , redirectTo:'dashboard' ,pathMatch:'full'},
  {path:'dashboard' , component:DashboardComponent},
  {path:'scurity' , component:ScurityComponent},
  {path:'systemmonitoring' , component:SystemmonitoringComponent},
  {path:'configuration' , component:ConfigurationComponent},
  {path:'grouppolicymanagement' , component:GrouppolicymanagementComponent},
  {path:'hosts/:id' , component:HostsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'**' , component:NotFoundError}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
