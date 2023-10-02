import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TaskStorageService } from "../task-storage.service";
import { Router } from "@angular/router";
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  imports: [
    NgModule,
    BrowserModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatDatepickerModule
  ],
})
export class AppModule {
}





@Component({
  selector: "app-task-add",
  templateUrl: "./task-add.component.html",
  styleUrls: ["./task-add.component.css"],
})
export class TaskAddComponent {
  title = new FormControl("");
  note = new FormControl("");
  status = new FormControl("");
  difficulty = new FormControl("");

  constructor(private storage: TaskStorageService, private router: Router) {}

  createTask() {
    this.storage.add({
      id: null,
      difficulty: Number(this.difficulty.value),
      status: this.status.value,
      note: this.note.value,
      title: this.title.value,
    });
    
    this.router.navigate(["/tasks"]);
  }
}
