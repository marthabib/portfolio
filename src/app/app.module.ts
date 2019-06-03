import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//material section
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatTabsModule} from '@angular/material/tabs';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToolBarWithSideBarComponent } from './tool-bar-with-side-bar/tool-bar-with-side-bar.component';

import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import{StackListComponent} from './stack-list/stack-list.component';
import { BackGroundComponent } from './back-ground/back-ground.component'
@NgModule({
  declarations: [
    AppComponent,
    ToolBarWithSideBarComponent,
    AboutComponent,
    StackListComponent,
    BackGroundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTabsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
