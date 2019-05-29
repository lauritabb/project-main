import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Song } from '../song';
import { SongService } from '../song.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private songService: SongService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {}

}
