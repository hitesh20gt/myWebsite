import { Component, OnInit } from '@angular/core';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
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

  checkoutForm = this.formBuilder.group({
    csi_ID:[''],
    start:[''],
    end:['']
  });

  get csi_ID() {
    return this.checkoutForm.get('csi_ID');
  }

  get start() {
    return this.checkoutForm.get('start');
  }

  get end() {
    return this.checkoutForm.get('end');
  }

  logs: string[];

  constructor(
        private employeeService: EmployeeService,
        private formBuilder: FormBuilder) {
  }

  onSubmit() {
    console.log(this.checkoutForm.get('csi_ID').value);
    this.employeeService.findAllLogs(this.checkoutForm.get('csi_ID').value, this.checkoutForm.get('start').value, this.checkoutForm.get('end').value).subscribe(data => {
      console.log(data);
      this.logs = data;
    });
  }
}

