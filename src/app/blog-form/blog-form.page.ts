import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.page.html',
  styleUrls: ['./blog-form.page.scss'],
})
export class BlogFormPage implements OnInit {
  newForm !:FormGroup
  constructor(private router: Router,private fb: FormBuilder) { }

  ngOnInit() {
    this.newForm = this.fb.group({
      tittle: ['', [Validators.required, Validators.minLength(15)]],
      content: ['', [Validators.required, Validators.minLength(900)]],
    });
  }

  goBack(){
    this.router.navigate(['/','feed']);
  }

  onSubmit(formData: any){
    console.log(formData.value)
  }

}
