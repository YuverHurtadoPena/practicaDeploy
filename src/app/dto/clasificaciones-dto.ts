export class ClasificacionesDto {
  id!: number;

  nombre!: string;

  description!: string;
  constructor( nombre: string, description: string) {
    this.nombre = nombre;
    this.description = description;
  }
}
