import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Application Logger System';
  select = 'Choose an Alternative';

  logs: string[];

  constructor(
        private employeeService: EmployeeService) {
  }

  onSubmit(csi_ID: string,start:Date,end:Date) {
    this.employeeService.findAllLogs(csi_ID, start.toDateString(),end.toDateString()).subscribe(data => {
      this.logs = data});
  }
}

