import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExerciceModel } from './ExerciceModel';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {

  constructor(private http: HttpClient) { }

  baseurl: string = "https://gotraining-backend.herokuapp.com/";

  getAllExercices(){
    return this.http.get<ExerciceModel[]>(this.baseurl + 'nodeapi');
  }

  getExerciceById(id: string){
    return this.http.get<ExerciceModel>(this.baseurl + 'nodeapi' + '/' + id);
  }

}
