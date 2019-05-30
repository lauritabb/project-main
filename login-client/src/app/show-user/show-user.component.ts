import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Song } from '../song';
import { SongService } from '../song.service';
import { switchMap } from 'rxjs/operators';
import { Count } from '../count';
import { Users } from '../users';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  playlistArr=[];
  users: Users;
  count: Count[]=[];
  constructor(
    private httpService: HttpService,
    private songService: SongService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params =>
          this.httpService.getOneUserSong(params.get('user_id')))
      )
      .subscribe(
        data => {
          console.log('show-song-component, getting single song:', data);
          const playlist = JSON.parse(data.playlist);
          const user = JSON.parse(data.This_user_songs);
          const countOne = JSON.parse(data.count);
          this.users = user[0];
          this.playlistArr = playlist;
          this.count = countOne;
          console.log("users: ",this.users);
          console.log("playlist",this.playlistArr);
          console.log("Count from component",this.count);
        },
        error => {
          console.log(error);
        }
      );
  }

}
interface UserSongs{
  This_user: string;
  playlist: string;
  count: string;
}