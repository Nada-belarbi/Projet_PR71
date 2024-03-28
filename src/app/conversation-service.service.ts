import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conversation } from './models/Conversation';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  private apiUrl = 'C:\\Users\\223114186\\Projet-PR71\\src\\assets\\Data_projet.json';

  constructor(private http: HttpClient) {}

  getConversations(): Observable<Conversation[]> {
    return this.http.get<Conversation[]>(this.apiUrl + '/conversations');
  }
  addConversations(uv: Conversation): Observable<Conversation> {
    return this.http.post<Conversation>(this.apiUrl + '/conversations', uv);
  }

  deleteConversations(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/conversations/${id}`);
  }

  updateConversations(id: number, updatedConversations: Conversation): Observable<Conversation> {
    return this.http.put<Conversation>(`${this.apiUrl}/conversations/${id}`, updatedConversations);
  }
}
