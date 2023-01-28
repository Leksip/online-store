import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../interfaces/product';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  form: FormGroup = this.fb.group({
    title: [null, Validators.required],
    price: [null, Validators.required],
    chip: [null, Validators.required],
    year: [null, Validators.required],
    ssd: [null, Validators.required],
    memory: [null, Validators.required],
    display: [null, Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private fb: FormBuilder
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.data = {
      title: this.form.get('title').value,
      price: this.form.get('price').value,
      year: this.form.get('year').value,
      image: 'assets/images/sneakers.jpg',
      configure: {
        chip: this.form.get('chip').value,
        ssd: this.form.get('ssd').value,
        memory: this.form.get('memory').value,
        display: this.form.get('display').value,
      }
    };

    this.dialogRef.close(this.data);
  }
}
