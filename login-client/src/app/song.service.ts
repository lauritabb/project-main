import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from} from 'rxjs';
import { Router } from '@angular/router';
import { Song } from './song'

@Injectable({
  providedIn: 'root'
})
export class SongService {
  baseURL = 'http://localhost:8000/songs'
  constructor(private http:HttpClient, private route:Router) { }

  addSong(song: Song): void{
    console.log("we are in add Song ", song)
    let obs =this.http.post<Song>(`${this.baseURL}/create/`,song);
    obs.subscribe(data => {
      console.log("hello")
    })
    // return this.http.post<Song>(this.baseURL+'/create/',song)
  }

  getOneSong(user_id): Observable<Song>{
    return this.http.get<Song>(this.baseURL + '/'+user_id);
  }
  getSongs(): Observable<Song[]>{
    return this.http.get<Song[]>(this.baseURL+'/');
  }
}
