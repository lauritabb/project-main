import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatelogRegComponent } from './templatelog-reg/templatelog-reg.component';
import { WelcomeComponent } from '../app/welcome/welcome.component';
import { DetailsComponent } from '../app/details/details.component';
import { from } from 'rxjs';
import { ShowUserComponent } from './show-user/show-user.component';
import { ShowSongComponent } from './show-song/show-song.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path:'login', 
    children: [
      {
        path: '', //localhost:4200/login/
        component:TemplatelogRegComponent
      },
      {
        path:'welcome', //localhost:4200/login/welcome
        component:WelcomeComponent
      },
      {
        path: 'all',
        component:DetailsComponent
      }
    ]
  },
  {
    path: 'songs',
    children:[
      {
        path: ':song_id',
        component: ShowSongComponent
      }
    ]
  },
  {
    path: 'users',
    children:[
      {
        path: ':user_id',
        component: ShowUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
