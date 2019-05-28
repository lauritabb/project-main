import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { SongService } from '../song.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-song-new',
  templateUrl: './song-new.component.html',
  styleUrls: ['./song-new.component.css']
})
export class SongNewComponent implements OnInit {
 createForm: object ={
    title:'',
    artist:'',
  }
  constructor(private httpService:HttpService, private songService:SongService) { }

  ngOnInit() {
  }

}
