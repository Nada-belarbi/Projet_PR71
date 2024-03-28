import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Association } from './models/Association';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  private apiUrl = 'C:\\Users\\223114186\\Projet-PR71\\src\\assets\\Data_projet.json';

  constructor(private http: HttpClient) {}

  getAssociations(): Observable<Association[]> {
    return this.http.get<Association[]>(this.apiUrl + '/associations');
  }
  addAssociations(Association: Association): Observable<Association> {
    return this.http.post<Association>(this.apiUrl + '/Associations', Association);
  }

  deleteAssociations(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Associations/${id}`);
  }

  updateAssociations(id: number, updatedAssociations: Association): Observable<Association> {
    return this.http.put<Association>(`${this.apiUrl}/Associations/${id}`, updatedAssociations);
  }
}
