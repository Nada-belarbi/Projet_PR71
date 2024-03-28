import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invitation } from './models/Invitation';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {
  private apiUrl = 'C:\\Users\\223114186\\Projet-PR71\\src\\assets\\Data_projet.json';

  constructor(private http: HttpClient) {}

  getInvitations(): Observable<Invitation[]> {
    return this.http.get<Invitation[]>(this.apiUrl + '/invitations');
  }
  addInvitations(Invitation: Invitation): Observable<Invitation> {
    return this.http.post<Invitation>(this.apiUrl + '/invitations', Invitation);
  }

  deleteInvitations(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/invitations/${id}`);
  }

  updateInvitations(id: number, updatedInvitations: Invitation): Observable<Invitation> {
    return this.http.put<Invitation>(`${this.apiUrl}/invitations/${id}`, updatedInvitations);
  }
}
