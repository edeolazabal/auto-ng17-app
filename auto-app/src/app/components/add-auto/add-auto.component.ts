import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';

import { Router } from '@angular/router';
import { AutoService } from '../../services/auto.service';
import { Auto } from '../../model/auto';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-auto',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-auto.component.html',
  styleUrl: './add-auto.component.css'
})
export class AddAutoComponent implements OnInit {
  public myForm!: FormGroup
  
  constructor(
    private fb: FormBuilder,
    private autoService: AutoService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.myForm = this.fb.group ({
      id: [''],
      brand: ['', Validators.required],
      price:  ['', Validators.required]

    })
  }

  addAuto() {
    const auto: Auto = {
      id: 0,
      brand: this.myForm.get('brand')!.value,
      price: this.myForm.get('price')!.value
    }
    this.autoService.saveAuto(auto).subscribe({
      next: (data) => {
        console.log("ingresando registro...")
        this.snackBar.open('Auto creado correctamento', '', {
          duration: 3000
        })
        this.router.navigate(['/listauto'])
      },
      error: (err) => {
        console.log(err)
      },
    })
  }

}
