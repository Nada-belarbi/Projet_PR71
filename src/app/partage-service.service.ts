import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partage } from './models/Partage';

@Injectable({
  providedIn: 'root'
})
export class PartageService {
  private apiUrl = 'C:\\Users\\223114186\\Projet-PR71\\src\\assets\\Data_projet.json';

  constructor(private http: HttpClient) {}

  getPartages(): Observable<Partage[]> {
    return this.http.get<Partage[]>(this.apiUrl + '/partages');
  }
  addPartages(Partage: Partage): Observable<Partage> {
    return this.http.post<Partage>(this.apiUrl + '/partages', Partage);
  }

  deletePartages(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/partages/${id}`);
  }

  updatePartages(id: number, updatedPartages: Partage): Observable<Partage> {
    return this.http.put<Partage>(`${this.apiUrl}/partages/${id}`, updatedPartages);
  }
}
