import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from} from 'rxjs';
import { Router } from '@angular/router';
import { Song } from './song'

@Injectable({
  providedIn: 'root'
})
export class SongService {
  baseURL = 'https://localhost:800/song'
  constructor(private http:HttpClient, private route:Router) { }

  addSong(){}

  getOneSong(user_id): Observable<Song>{
    return this.http.get<Song>(this.baseURL + '/'+user_id);
  }
  getSongs(): Observable<Song[]>{
    return this.http.get<Song[]>(this.baseURL);
  }
}
