import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { INews } from '../models/INews';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getDailyNews(): Observable<INews[]> {
    return this.http.get<INews[]>("https://ccgames.online/api/getDailyNews");
  }
}
