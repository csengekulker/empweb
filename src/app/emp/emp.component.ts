import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
 
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
 
  actPosition !: number;
  emps!:any
 
  // emps = [
  //   {"id": 1, "name": "Peres Béla", "positionId": 1},
  //   {"id": 2, "name": "Energia Árpád", "positionId": 1},
  //   {"id": 3, "name": "Gyenge Valér", "positionId": 2},
  //   {"id": 4, "name": "Pásztó László", "positionId": 2},
  //   {"id": 5, "name": "Trombita Béla", "positionId": 3},
  //   {"id": 6, "name": "Rendes Lajos", "positionId": 3},
 
  // ];  
  constructor(private api: ApiService) { }
 
  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees() {
    this.api.getEmployees().subscribe({
      next: (data:any) => {
        this.emps = data
      },
      error: (err:any) => {
        console.log(err);
        
      }
    })
  }
 
}