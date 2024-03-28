import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Groupe } from './models/Groupe';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  private apiUrl = 'C:\\Users\\223114186\\Projet-PR71\\src\\assets\\Data_projet.json';

  constructor(private http: HttpClient) {}

  getGroupes(): Observable<Groupe[]> {
    return this.http.get<Groupe[]>(this.apiUrl + '/groupes');
  }
  addGroupes(Groupes: Groupe): Observable<Groupe> {
    return this.http.post<Groupe>(this.apiUrl + '/groupes', Groupes);
  }

  deleteGroupes(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/groupes/${id}`);
  }

  updateGroupes(id: number, updatedGroupes: Groupe): Observable<Groupe> {
    return this.http.put<Groupe>(`${this.apiUrl}/groupes/${id}`, updatedGroupes);
  }
}
