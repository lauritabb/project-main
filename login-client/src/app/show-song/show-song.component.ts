import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, count } from 'rxjs/operators';
import { Song } from '../song';
import { Users } from '../users';
import { Count } from '../count';
import { HttpService } from '../http.service';
import { SongService } from '../song.service';

@Component({
  selector: 'app-show-song',
  templateUrl: './show-song.component.html',
  styleUrls: ['./show-song.component.css']
})
export class ShowSongComponent implements OnInit {
  users: Users[];
  song: Song;
  playlistArr=[];
  person = localStorage.getItem('user');
  count: Count[]=[];

  constructor(
    private HttpService: HttpService,
    private songService: SongService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params =>
          this.songService.getOneSong(params.get('song_id')))
      )
      .subscribe(
        data => {
          console.log('show-song-component, getting single song:', data);
          const playlist = JSON.parse(data.playlist);
          const song = JSON.parse(data.song1);
          const countOne = JSON.parse(data.count);
          this.song = song[0];
          this.playlistArr = playlist;
          this.count = countOne;
          console.log("song: ",this.song);
          console.log("playlist",this.playlistArr);
          console.log("Count from component",this.count);
        },
        error => {
          console.log(error);
        }
      );
  }

}

