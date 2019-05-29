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
        console.log("these are the songs!!!!", data);
        this.songs = data;
      },
      error => {
        console.log(error);
      });
  }
  // this needs check, the html loads faster than the data, reason why it gives at undefined error
  addSongEvent(song: Song){
    console.log("in dashboard.component adding song", song)
    this.songs.push(song[0]);
    console.log("this.songs: ", this.songs)
  }

  addToPlaylist(song_id, person){
    console.log(song_id, person)
    this.songService.addToUserPlaylist(song_id, person).subscribe(data =>{
      console.log("addto play");
    }, 
    error =>{
      console.log(error)
    });
  }
}

