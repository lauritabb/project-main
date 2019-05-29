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

  addSong(song): Observable<Song>{
    console.log("we are in add Song ", song)
    return this.http.post<Song>(this.baseURL+'/create/',song)
  }

  getOneSong(song_id): Observable<Song>{
    return this.http.get<Song>(this.baseURL + '/'+song_id);
  }
  getSongs(): Observable<Song[]>{
    return this.http.get<Song[]>(this.baseURL+'/');
  }
  addToUserPlaylist(song_id: number, person_id:number){
    console.log("got to Song.service.ts, song_id: ", song_id, person_id)
    // this.testData.push(person_id) 
    return this.http.post<Song>(this.baseURL + '/playlist/', {song_id,person_id});

  }
}
