import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// ============================== HTTP ==================================== //
import { HttpClientModule } from '@angular/common/http';
// ============================== SERVICE ==================================== //
import { BaseService } from './base.service';
// ============================== FIREBASE ==================================== //
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
// ============================== MODULES ==================================== //
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { GamesModuleModule } from './games/games-module.module';
import { PptModule } from './games/pages/ppt/ppt.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // ****************** MYS MODULES ************************ //
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    LayoutModule,
    GamesModuleModule,
    PptModule,
    // ****************** SERVICES MODULE ************************ //
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
        // ****************** ANGULAR MODULES ************************ //
    BrowserAnimationsModule
  ],
  providers: [
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
