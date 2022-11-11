import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { data } from 'jquery';
import { AllhostsService } from '../_services/Allhosts.service';

@Component({
  selector: 'app-scurity',
  templateUrl: './scurity.component.html',
  styleUrls: ['./scurity.component.css']
})
export class ScurityComponent implements OnInit {
  searchText4: any;
  constructor(private AllhostsService:AllhostsService) { }

  ngOnInit(): void {
    this.getAllapplication()
    this.getAllsystem()
    this.getAllsecurity()
  }


  trendingapplication:any[] =[]
  trendingsystem:any[] =[]
  trendingsecurity:any[] =[]
  x :number=0
  y :number=0
  z :number=0
  total:number=0


  getAllapplication(){

    this.AllhostsService.getAllapplication().subscribe(response=>{
      this.trendingapplication = response.data.data
      this.x =response.results
    })
  }

  getAllsystem(){

    this.AllhostsService.getAllsystem().subscribe(response=>{
      this.trendingsystem= response.data.data
      this.z =response.results
      
      
    })
  }

  getAllsecurity(){

    this.AllhostsService.getAllsecurity().subscribe(response=>{
      this.trendingsecurity= response.data.data
      this.y =response.results
      
    })
  }




  

}
