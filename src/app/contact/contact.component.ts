import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl(''),
      number: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
  }

  submited() {
    console.log('this.form.value: ', this.form.value);
    let Array: any = [this.form.value.name, this.form.value.number, this.form.value.email, this.form.value.message]
    console.log('Array: ', Array);
    localStorage.setItem("User Details", Array)
    this.form.reset()


  }
}
