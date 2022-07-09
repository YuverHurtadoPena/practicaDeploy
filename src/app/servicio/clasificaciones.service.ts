import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClasificacionesDto } from '../dto/clasificaciones-dto';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionesService {

  urlMain = environment.host_services_api+`api/clasificacion/`;
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  public getListClasificaciones(): Observable<ClasificacionesDto[]> {
    return this.httpClient.get<ClasificacionesDto[]>(
      this.urlMain + `list`
    );
  }

  public save(dto: ClasificacionesDto): Observable<any> {
    return this.httpClient.post<any>(`${this.urlMain}create`, dto);
  }
}
