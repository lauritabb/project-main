import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from} from 'rxjs';
// import { ConsoleReporter } from 'jasmine';
import { Users } from './users'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseURL = 'http://localhost:8000'

  constructor(private _http: HttpClient, private router:Router) { 
  }

  getUsers(): Observable<Users[]>{
    return this._http.get<Users[]>(this.baseURL);
  }
  
  getOneUser(user_id): Observable<Users>{
    return this._http.get<Users>(this.baseURL + '/'+user_id);
  }
  getOneUserSong(user_id): Observable<UserSongs>{
    return this._http.get<UserSongs>(this.baseURL + '/songs/users/'+user_id);
  }


  createUser(userData:object){
   return this._http.post<UserData>(this.baseURL+'/'+'create/',userData);
  }

  loginUser(loginData:object): void{
    let obs = this._http.post<UserData>(`${this.baseURL}/login/`, loginData);
    obs.subscribe(
      (data) => {
        localStorage.setItem('user', data.id);
        localStorage.setItem('name', data.first_name);
        this.router.navigateByUrl('/login/welcome')

      },
      (errors) => {
        console.log(errors);
      }
    )
  }

  logoutUser(): void {
    localStorage.clear();
    this.router.navigateByUrl('/')
  }

}
interface UserData {
  first_name: string;
  id: string;
}

interface UserSongs{
  This_user_songs: string;
  playlist: string;
  count: string;
}