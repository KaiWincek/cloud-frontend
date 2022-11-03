import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, FormControl} from "@angular/forms";
import {environment} from "../environments/environment";

interface ContentObject {
  id: bigint;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Cloud';
  value = '';
  input = new FormControl();
  loadedContentObjects: ContentObject[] = [];

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

  fetch() {
    this.http.get<any>(environment.backendURL + "/fetch").subscribe(responseData => {
      this.loadedContentObjects = responseData;
      console.log(this.loadedContentObjects);
    })
  }
}
