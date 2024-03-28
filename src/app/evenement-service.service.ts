import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenement } from './models/Evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  private apiUrl = 'C:\\Users\\223114186\\Projet-PR71\\src\\assets\\Data_projet.json';

  constructor(private http: HttpClient) {}

  getEvenements(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.apiUrl + '/evenements');
  }
  addEvenements(uv: Evenement): Observable<Evenement> {
    return this.http.post<Evenement>(this.apiUrl + '/uvs', uv);
  }

  deleteEvenements(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/uvs/${id}`);
  }

  updateEvenements(id: number, updatedEvenements: Evenement): Observable<Evenement> {
    return this.http.put<Evenement>(`${this.apiUrl}/uvs/${id}`, updatedEvenements);
  }
}
