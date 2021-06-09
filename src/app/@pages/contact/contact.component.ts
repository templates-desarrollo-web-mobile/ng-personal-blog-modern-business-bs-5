import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = this.formBuilder.group(
    {
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.minLength(6)]],
      message: ["", Validators.required]
    }
  );
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
   
  }

   // convenience getter for easy access to form fields
   get form() {
    return this.contactForm?.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm?.invalid) {
      return;
    }

    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.contactForm?.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.contactForm?.reset();
  }

}
