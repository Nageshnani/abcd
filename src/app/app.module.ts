import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'home', component:HomeComponent},
      {path:'about', component:AboutComponent},
      {path:'services', component:ServicesComponent},
      {path:'blog', component:BlogComponent},
      {path:'contact', component:ContactComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
