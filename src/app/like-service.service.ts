import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Like } from './models/Like';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private apiUrl = 'C:\\Users\\223114186\\Projet-PR71\\src\\assets\\Data_projet.json';

  constructor(private http: HttpClient) {}

  getLikes(): Observable<Like[]> {
    return this.http.get<Like[]>(this.apiUrl + '/likes');
  }
  addLikes(Likes: Like): Observable<Like> {
    return this.http.post<Like>(this.apiUrl + '/likes', Likes);
  }

  deleteLikes(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/likes/${id}`);
  }

  updateLikes(id: number, updatedLikes: Like): Observable<Like> {
    return this.http.put<Like>(`${this.apiUrl}/likes/${id}`, updatedLikes);
  }
}
