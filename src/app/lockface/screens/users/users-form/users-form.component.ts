import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardService } from '../../../services/dashboard.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent {
  loading = false;
  imagen!: File;
  imagenObj = {
    name: ''
  };
  userForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    nickname: ['', Validators.required],
    clave: ['', Validators.required],
    rol: ['', Validators.required],
    estado: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    @Inject(MAT_DIALOG_DATA) public MatDialogData: any,
    public dialogRef: MatDialogRef<UsersFormComponent>
  ) {}

  Cancel(): void {
    this.loading = false;
    this.userForm.reset();
    this.dialogRef.close();
  }

  save(): void {
    this.loading = true;
    const formData = new FormData();
    formData.append('nombre', this.userForm.get('nombre')!.value!);
    formData.append('apellido', this.userForm.get('apellido')!.value!);
    formData.append('nickname', this.userForm.get('nickname')!.value!);
    formData.append('clave', this.userForm.get('clave')!.value!);
    formData.append('rol', this.userForm.get('rol')!.value!);
    formData.append('imagen', this.imagen, `${this.userForm.get('nickname')!.value!}.jpg`);
    console.log(formData)
    this.dashboardService.addUser(formData).subscribe(
      (res) => {
        this.loading = false;
        this.Cancel();
        Swal.fire({
          title: 'Usuario agregado',
          text: `Se ha agregado el usuario ${res.nickname}`,
          icon: 'success'
        })
      }, (err) => {
        Swal.fire({
          title: 'Oops...',
          text: this.mapMessages(err.error.errors),
          icon: 'error'
        })
        this.loading = false;
      }
    );
  }

  mapMessages(data: any): string {
    let messages = '';
    data.forEach(element => {
      messages += element.msg + '. \n';
    });
    return messages;
  }

  addFile(file): void {
    this.imagenObj.name = file.target.files[0].name;
    this.imagen = file.target.files[0];
  }

}
