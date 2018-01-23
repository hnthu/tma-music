import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes,ActivatedRoute} from '@angular/router';


import { AppComponent } from './app.component';

import { HomePageComponent } from './homepage/homepage.component';
import { ContentPageComponent } from './homepage/contentpage/contentpage.component';
import { FooterPageComponent } from './homepage/footerpage/footerpage.component';
import { HotsongComponent } from './hotsong/hotsong.component';
import { HotgenreComponent } from './hotgenre/hotgenre.component';
import { NewsongComponent } from './newsong/newsong.component';


  const routes:Routes=[
     
      {
       path:'',
       component: HomePageComponent
     },
      { path: '',
        redirectTo: '/homepage',
        pathMatch: 'full'
        }

   ]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContentPageComponent,
    FooterPageComponent,
    HotsongComponent,
    HotgenreComponent,
    NewsongComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
