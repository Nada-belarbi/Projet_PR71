import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UV } from './models/Uvs';

@Injectable({
  providedIn: 'root'
})
export class UVService {
  private apiUrl = 'C:\\Users\\223114186\\Projet-PR71\\src\\assets\\Data_projet.json';

  constructor(private http: HttpClient) {}

  getUVs(): Observable<UV[]> {
    return this.http.get<UV[]>(this.apiUrl + '/uvs');
  }
  addUv(uv: UV): Observable<UV> {
    return this.http.post<UV>(this.apiUrl + '/uvs', uv);
  }

  deleteUv(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/uvs/${id}`);
  }

  updateUv(id: number, updatedUv: UV): Observable<UV> {
    return this.http.put<UV>(`${this.apiUrl}/uvs/${id}`, updatedUv);
  }
}
