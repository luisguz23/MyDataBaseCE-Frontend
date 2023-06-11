import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css']
})
export class MatrizComponent implements OnInit{
  matriz: number[][] = [];

  constructor(private router: Router,private http: HttpClient) {}


  ngOnInit() {
      this.http.get<number[][]>('http://localhost:8080/matriz').subscribe(matriz => {
          this.matriz = matriz;
      });
    }

}
