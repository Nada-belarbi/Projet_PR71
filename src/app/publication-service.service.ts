import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from './models/Publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private apiUrl = 'C:\\Users\\223114186\\Projet-PR71\\src\\assets\\Data_projet.json';

  constructor(private http: HttpClient) {}

  getPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.apiUrl + '/publications');
  }
  addPublications(uv: Publication): Observable<Publication> {
    return this.http.post<Publication>(this.apiUrl + '/publications', uv);
  }

  deletePublications(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/publications/${id}`);
  }

  updatePublications(id: number, updatedPublications: Publication): Observable<Publication> {
    return this.http.put<Publication>(`${this.apiUrl}/publications/${id}`, updatedPublications);
  }
}
