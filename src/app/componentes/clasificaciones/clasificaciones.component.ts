import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClasificacionesDto } from 'src/app/dto/clasificaciones-dto';
import { ClasificacionesService } from 'src/app/servicio/clasificaciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clasificaciones',
  templateUrl: './clasificaciones.component.html',
  styleUrls: ['./clasificaciones.component.css']
})
export class ClasificacionesComponent implements OnInit {

  private clasificacionesService: ClasificacionesService;
  haveItem: boolean = false;
  dto: ClasificacionesDto[] = [];

  clasificacionesForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(clasificacionesService: ClasificacionesService) {
    this.clasificacionesService = clasificacionesService;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.clasificacionesService.getListClasificaciones().subscribe({
      next: (data) => {
        this.dto = data;
        if (data && data.length > 0) {
          this.haveItem = true;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onCreate() {
    if(this.clasificacionesForm.valid){
      const dtoC = new ClasificacionesDto(
        this.clasificacionesForm.controls['nombre'].value.trim(),
        this.clasificacionesForm.controls['description'].value.trim())

        this.clasificacionesService.save(dtoC).subscribe({
          next: () => {
            this.loadData();
            Swal.fire({
              title: "Registro exitoso",
              icon: "success",
              text: "Se ha guardado la información correctamente",
              confirmButtonText: "Aceptar",

              showCloseButton: true,
            });
          },
          error: ()=>{
            Swal.fire({
              title: "Error",
              icon: "error",
              text: "La informacion no puedo ser guardada, intente nuevamente por favor",
              confirmButtonText: "Aceptar",

              showCloseButton: true,
            });

          }
        });

    }else{
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Debe llenar todos los campos.",
        confirmButtonText: "Aceptar",

        showCloseButton: true,
      });
    }

  }
}
