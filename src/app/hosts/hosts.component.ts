import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { AllhostsService } from '../_services/Allhosts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {
  id: string = '';
  hosts:any ={};
  constructor(private _ActivatedRoute: ActivatedRoute, private AllhostsService:AllhostsService) { }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this.getAllHosts()
    this.getAllprocesses()
    this.getAllRoute()
    this.getAllGroups()
    this.getAllservices()
    this.getAllsessions()
    this.getAllarp()
    this.getAllinstalledSoftware()
    this.getAllinterfaceAddresses()
    this.getAllsecheduledTasks()
    this.getAllPatches()
    this.getAllusersGroups()
    this.getAlllocalUsers()
    this.getAlllistenPorts()

  }

  trendinghosts:{[key:string]:any;}={}

  getAllHosts(){

    this.AllhostsService.getAllHosts(this.id).subscribe((response)=>{
      this.trendinghosts = response.data.data
    })
  }

  trendingprocesses:any[] =[]

  getAllprocesses(){

    this.AllhostsService.getAllprocesses(this.id).subscribe((response )=>{
      this.trendingprocesses = response.data
    })
  }

  trendingroute:any[] =[]

  getAllRoute(){

    this.AllhostsService.getAllRoute(this.id).subscribe(response =>{
      this.trendingroute = response.data
    })
  }


  trendinggroups:any[] =[]
  
  getAllGroups(){

    this.AllhostsService.getAllGroups(this.id).subscribe(response =>{
      this.trendinggroups = response.data
      
    })
  }

  trendingservices:any[] =[]
  
  getAllservices(){

    this.AllhostsService.getAllservices(this.id).subscribe(response =>{
      this.trendingservices = response.data
      
    })
  }

  trendingsessions:any[] =[]
  
  getAllsessions(){

    this.AllhostsService.getAllsessions(this.id).subscribe(response =>{
      this.trendingsessions = response.data
    })
  }


  trendingarp:any[] =[]
  
  getAllarp(){

    this.AllhostsService.getAllarp(this.id).subscribe(response =>{
      this.trendingarp = response.data
    })
  }

  trendinginstalledSoftware:any[] =[]
  
  getAllinstalledSoftware(){

    this.AllhostsService.getAllinstalledSoftware(this.id).subscribe(response =>{
      this.trendinginstalledSoftware = response.data
    })
  }

  trendinginterfaceAddresses:any[] =[]
  
  getAllinterfaceAddresses(){

    this.AllhostsService.getAllinterfaceAddresses(this.id).subscribe(response =>{
      this.trendinginterfaceAddresses = response.data
    })
  }

  trendingsecheduledTasks:any[] =[]
  
  getAllsecheduledTasks(){

    this.AllhostsService.getAllsecheduledTasks(this.id).subscribe(response =>{
      this.trendingsecheduledTasks = response.data
    })
  }

  trendingPatches:any[] =[]
  
  getAllPatches(){

    this.AllhostsService.getAllPatches(this.id).subscribe(response =>{
      this.trendingPatches = response.data
      console.log(response)
    })
  }

  trendingusersGroups:any[] =[]
  
  getAllusersGroups(){

    this.AllhostsService.getAllusersGroups(this.id).subscribe(response =>{
      this.trendingusersGroups = response.data
    })

    
  }

  trendinglocalUsers:any[] =[]
  getAlllocalUsers(){

    this.AllhostsService.getAlllocalUsers(this.id).subscribe(response =>{
      this.trendinglocalUsers = response.data
    })

    
  }

  trendinglistenPorts:any[] =[]
  getAlllistenPorts(){

    this.AllhostsService.getAlllistenPorts(this.id).subscribe(response =>{
      this.trendinglistenPorts = response.data
    })

    
  }


}
