import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { SongService } from '../song.service';
import { NgForm } from '@angular/forms';
import { Song } from '../song';
import { Users } from '../users';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-song-new',
  templateUrl: './song-new.component.html',
  styleUrls: ['./song-new.component.css']
})
export class SongNewComponent implements OnInit {
 newSong: Song = new Song();
 users: Users[];
 @Output() addnewSongOut = new EventEmitter<Song>();
registerSong: object ={
  title:'',
  artist:'',
}

  constructor(private httpService:HttpService, private songService:SongService) { }

  ngOnInit() {
  }
  addnewSong(){
    // console.log("form was submitter ->addTask ", formNewSong);
    // this.addnewSongOut.emit(this.newSong);
    this.songService.addSong(this.registerSong);
    // this.songService.getSongs().subscribe(data => {this.})
    // this.newSong = new Song();
    // formNewSong.reset();
  }

}
