import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatelogRegComponent } from './templatelog-reg/templatelog-reg.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SongNewComponent } from './song-new/song-new.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatelogRegComponent,
    WelcomeComponent,
    DetailsComponent,
    HeaderComponent,
    DashboardComponent,
    SongNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
