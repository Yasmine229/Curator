import { MyChartComponent } from './Components/my-chart/my-chart.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SystemmonitoringComponent } from './systemmonitoring/systemmonitoring.component';
import { ScurityComponent } from './scurity/scurity.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HostsComponent } from './hosts/hosts.component';
import { GrouppolicymanagementComponent } from './grouppolicymanagement/grouppolicymanagement.component';
import {HttpClientModule} from '@angular/common/http';
import { SecurityDetailsComponent } from './scurity/security-details/security-details.component';
import { NgChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SystemmonitoringComponent,
    ScurityComponent,
    ConfigurationComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    HostsComponent,
    GrouppolicymanagementComponent,
    SecurityDetailsComponent,
    MyChartComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
