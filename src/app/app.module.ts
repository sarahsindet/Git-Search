import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserRepoListComponent } from './user-repo-list/user-repo-list.component';
import { LogoHighlightDirective } from './logo-highlight.directive';
import { DatePipePipe } from './date-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    SearchUserComponent,
    UserDataComponent,
    UserRepoListComponent,
    LogoHighlightDirective,
    DatePipePipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
