import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, FormControl} from "@angular/forms";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Cloud';
  value = 'hey boi';
  input = new FormControl();

  cloudForm = this.formBuilder.group({
    input: this.input
  });

  constructor(private http: HttpClient,
              private formBuilder: FormBuilder) {}

  save(){
    this.http.post<string>(environment.backendURL + '/save', this.input.value, { headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8' }) }).subscribe(responseData => {
      console.log(responseData);
    });
  }
}
