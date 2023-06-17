import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-journal-form',
  templateUrl: './journal-form.component.html',
  styleUrls: ['./journal-form.component.css']
})
export class JournalFormComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}


  jobForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  preview: string = '';

  save() {
    this.preview = JSON.stringify(this.jobForm.value);
  }

  ngOnInit() {
    this.createRegisterForm();
  }
  createRegisterForm() {
    
  }
  
  
}
