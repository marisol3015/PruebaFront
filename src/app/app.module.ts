import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComicsComponent } from './components/shared/comics/comics.component';


const routes: Routes = [
  { path: '',component:ComicsComponent, pathMatch: 'full'},
 
];

@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  
    RouterModule.forRoot(routes),  
    ],

  providers: [   
   
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
