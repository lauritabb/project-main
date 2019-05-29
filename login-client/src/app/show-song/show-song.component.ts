import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Song } from '../song';
import { Users } from '../users';
import { HttpService } from '../http.service';
import { SongService } from '../song.service';

@Component({
  selector: 'app-show-song',
  templateUrl: './show-song.component.html',
  styleUrls: ['./show-song.component.css']
})
export class ShowSongComponent implements OnInit {
  users: Users[];
  song: Song[];

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
        song => {
          console.log('show-song-component, getting single song:', song);
          this.song = song[0];
        },
        error => {
          console.log(error);
        }
      );
      console.log(this.song);
  }

}
