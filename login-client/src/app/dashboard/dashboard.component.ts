import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { SongService } from '../song.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  songs: Song[] = [];

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.songService.getSongs()
      .subscribe( songs => {
        console.log("these are the songs!!!!", songs);
        this.songs = songs;
      },
      error => {
        console.log(error);
      });
  }

  addToPlaylist(song: Song){
    event.preventDefault();
    console.log('in dashboard component.ts; adding song to playlist', song);
    // this.songs.push(song);
    // this.songService.
  }
}

