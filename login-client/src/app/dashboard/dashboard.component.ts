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
  playlist: number =0;
  person = localStorage.getItem('user');

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.songService.getSongs()
      .subscribe( data => {
        this.songs = data;
      },
      error => {
        console.log(error);
      });
  }
  addSongEvent(song: Song){
    this.songs.push(song[0]);
  }

  addToPlaylist(song_id: number, person: number){
    this.songService.addToUserPlaylist(song_id, person).subscribe(data =>{
      console.log("addto play");
      this.songService.getSongs()
        .subscribe( data => {
          console.log("these are the songs!!!!", data);
          this.songs = data;
        },
        error => {
          console.log(error);
        });
    }, 
    error =>{
      console.log(error)
    });
  }
}

