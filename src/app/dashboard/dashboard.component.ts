import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { response } from 'express';
import { AllhostsService } from '../_services/Allhosts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchText: any;
  searchText2: any;

  constructor(private AllhostsService:AllhostsService) { }
  trendingsysmon1: any[]=[]
  ngOnInit(): void {
    this.getAllHosts1()
    this.getAllsysmon()
    this.getAllapplication()
    this.getAllsystem()
    this.getAllsecurity()

    
    // this.AllhostsService.getAllsysmon().subscribe(response=>{
    //   this.trendingsysmon1 = response.data.totalAlerts
    //   console.log(this.trendingsysmon1)
    //   function uniqueData(array, key) {
    //     // create new objects for use
    //     var uniqueArray: any[] = [];
    //     var map = new Map();
      
    //     // loop throught array
    //     array.forEach((user,index) => {
    //       // first item is always unique add to unique whithout check
    //       if(index == 0) {
    //         // using map set first item in map key and value is dynamic which we can set
    //         map.set(array[index].email, array[index].email);
    //         uniqueArray.push(array[index]);
    //       }
      
    //       //check if the key already exists if exists do not push else push
    //       if (!map.get(user[key])) {
    //         map.set(user[key], user[key]);
    //         uniqueArray.push(user);
    //       }
    //     });
    //     return uniqueArray;
    //   }
    // })





var ctxP = document.getElementById("divchart");
const mychart = document.getElementById("myChart");
var myPieChart = new Chart("mychart", {
  type: 'pie',
  data: {
    labels: ["T1003", "T1003", "T1003"],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
    }]
  },
  options: {
    responsive: true
  }
});


const myCharts = new Chart("mychart1", {
    type: 'bar',
    data: {
        labels: ['T1003','T1003', 'T1003'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


  }

  trendinghosts:any[] =[]
  trendingsysmon:any[] =[]
  x :number=0
  y :number=0
  z :number=0
  total:number=0

  getAllHosts1(){
    

    this.AllhostsService.getAllHosts1().subscribe(response=>{
      this.trendinghosts = response.hostsStatus
      
    })
  }

  getAllsysmon(){
    this.AllhostsService.getAllsysmon().subscribe(response=>{
      this.trendingsysmon = response.data.totalAlerts

  })
}
getAllapplication(){

  this.AllhostsService.getAllapplication().subscribe(response=>{
    this.x =response.results
  })
}

getAllsystem(){

  this.AllhostsService.getAllsystem().subscribe(response=>{
    this.z =response.results
    
    
  })
}

getAllsecurity(){

  this.AllhostsService.getAllsecurity().subscribe(response=>{
    this.y =response.results
    
  })
}


}
