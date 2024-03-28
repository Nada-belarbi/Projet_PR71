import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'C:\\Users\\223114186\\Projet-PR71\\src\\assets\\Data_projet.json';

  constructor(private http: HttpClient) {}

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl + '/messages');
  }
  addMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl + '/messages', message);
  }

  deleteMessage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/messages/${id}`);
  }

  updateMessage(id: number, updatedMessage: Message): Observable<Message> {
    return this.http.put<Message>(`${this.apiUrl}/messages/${id}`, updatedMessage);
  }
}
