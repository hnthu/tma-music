<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes,ActivatedRoute} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {Cookie} from 'ng2-cookies/ng2-cookies';

import { AppComponent } from './app.component';

import { HomePageComponent } from './homepage/homepage.component';
import { ContentPageComponent } from './homepage/contentpage/contentpage.component';
import { FooterPageComponent } from './homepage/footerpage/footerpage.component';
import { HotsongComponent } from './hotsong/hotsong.component';
import { HotgenreComponent } from './hotgenre/hotgenre.component';
import { NewsongComponent } from './newsong/newsong.component';
import { HeaderpageComponent } from './homepage/headerpage/headerpage.component';
import { TopmenubarComponent } from './topmenubar/topmenubar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { AppService } from './app.service';


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
    HeaderpageComponent,
    TopmenubarComponent,
    MenubarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    OAuthModule.forRoot(),
    HttpModule,
    HttpClientModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
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
import { HeaderpageComponent } from './homepage/headerpage/headerpage.component';
import { TopmenubarComponent } from './topmenubar/topmenubar.component';
import { MenubarComponent } from './menubar/menubar.component';


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
    HeaderpageComponent,
    TopmenubarComponent,
    MenubarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> e98b792efd54c336f69b5b9d99e681fd80c0d121
