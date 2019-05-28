import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { SongService } from '../song.service';
import { NgForm } from '@angular/forms';
import { Song } from '../song';
import { Users } from '../users';

@Component({
  selector: 'app-song-new',
  templateUrl: './song-new.component.html',
  styleUrls: ['./song-new.component.css']
})
export class SongNewComponent implements OnInit {
 newSong: Song = new Song();
 users: Users[];
  constructor(private httpService:HttpService, private songService:SongService) { }

  ngOnInit() {
  }
  addnewSong(event:Event, formNewSong: NgForm){
    console.log("addnewSong on song-new component")
  }

}
