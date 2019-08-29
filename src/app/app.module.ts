import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import {Routes,RouterModule} from '@angular/router';
import { ViewComponent } from './view/view.component';

const appRoutes:Routes=[
  {path:'',component:MovieComponent},
  {path:'view',component:ViewComponent},
  {path:'search',component:SearchComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieComponent,
    SearchComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }





