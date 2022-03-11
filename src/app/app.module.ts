import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './shared/child/child.component';
import { ParentComponent } from './shared/parent/parent.component';
import { ParentssComponent } from './event/parentss/parentss.component';
import { ChildsComponent } from './event/childs/childs.component';
import { DataService } from './servicess/data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    NotFoundComponent,
    ChildComponent,
    ParentComponent,
    ParentssComponent,
    ChildsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
