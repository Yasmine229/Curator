import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AllhostsService {

  constructor(private HttpClient:HttpClient){}
  
  getAllHosts(id:string):Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/hosts/${id}`)
  }
  getAllHosts1():Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/hosts`)
  }

  getAllprocesses(id:string):Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/processes/${id}`)
  }

  getAllRoute(id:string):Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/route/${id}`)
  }

  getAllGroups(id:string):Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/groups/${id}`)
  }

  getAllservices(id:string):Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/services/${id}`)
  }
  
  getAllsessions(id:string):Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/sessions/${id}`)
  }

  getAllarp(id:string):Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/arp/${id}`)
  }

  getAllinstalledSoftware(id:string):Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/installedSoftware/${id}`)
  }

  getAllinterfaceAddresses(id:string):Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/interfaceAddresses/${id}`)
  }

  getAllsecheduledTasks(id:string):Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/secheduledTasks/${id}`)
  }

  getAllPatches(id:string):Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/securityPatches/${id}`)
  }

  getAllusersGroups(id:string):Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/usersGroups/${id}`)
  }
  getAlllocalUsers(id:string):Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/localUsers/${id}`)
  }
  getAlllistenPorts(id:string):Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/listenPorts/${id}`)
  }

  getAllapplication():Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/application/`)
  }

  getAllsystem():Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/system/`)
  }

  getAllsecurity():Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/security/`)
  }

  getAllsysmon():Observable<any>
  {
return this.HttpClient.get(`http://localhost:5000/api/v1/sysmon/event/alerts`)
  }


}

