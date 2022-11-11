import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { AllhostsService } from '../_services/Allhosts.service';

@Component({
  selector: 'app-systemmonitoring',
  templateUrl: './systemmonitoring.component.html',
  styleUrls: ['./systemmonitoring.component.css']
})
export class SystemmonitoringComponent implements OnInit {
  searchText3: any;
  constructor(private AllhostsService:AllhostsService) { }

  ngOnInit(): void {
    this.getAllHosts1()
    
  }

 

  trendinghosts:any[] =[]

  getAllHosts1(){

    this.AllhostsService.getAllHosts1().subscribe(response=>{
      this.trendinghosts = response.hostsStatus
      console.log(response)
      
    })
  }

}
