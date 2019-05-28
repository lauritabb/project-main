import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  baseURL = 'https://localhost:800/song'
  constructor(private http:HttpClient, private route:Router) { }

  addSong(sonData:object){}
}
