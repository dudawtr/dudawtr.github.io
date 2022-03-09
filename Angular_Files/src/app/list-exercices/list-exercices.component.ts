import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ExerciceModel } from '../ExerciceModel';
import { ExerciceService } from '../exercice.service';

@Component({
  selector: 'app-list-exercices',
  templateUrl: './list-exercices.component.html',
  styleUrls: ['./list-exercices.component.css']
})
export class ListExercicesComponent implements OnInit {

  exercices: ExerciceModel[];

  constructor(private exerciceService: ExerciceService, private router: Router) { }

  ngOnInit() {
    this.getAllExercices();
  }

  getAllExercices(): void {
    this.exerciceService.getAllExercices().subscribe(data=>{
      this.exercices = data;
    });
  };
}
