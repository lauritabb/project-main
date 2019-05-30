import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
 @Output() addnewSongOut = new EventEmitter<Song>();
registerSong: object ={
  title:'',
  artist:'',
}

  constructor(private httpService:HttpService, private songService:SongService) { }

  ngOnInit() {
  }
  addnewSong(event:Event, formNewSong: NgForm){
    event.preventDefault();
    this.songService.addSong(this.newSong).subscribe(data => {
      this.newSong = data
      this.addnewSongOut.emit(this.newSong);
    })
    this.newSong = new Song();
    formNewSong.reset();
  }

}
