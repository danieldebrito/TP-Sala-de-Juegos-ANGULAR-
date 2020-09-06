import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// ============================== HTTP ==================================== //
import { HttpClientModule } from '@angular/common/http';
// ============================== SERVICE ==================================== //
import { BaseService } from './base.service';
// ============================== FIREBASE ==================================== //
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
// ============================== MODULES ==================================== //
/*
import { CrudModule } from './crud/crud.module';*/
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
/*
import { EcommerceModule } from './ecommerce/ecommerce.module';
*/

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*
    CrudModule,*/
    AuthModule,
    LayoutModule,
    /*
    EcommerceModule,*/
    // firebase -----------------------------------------------//
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    // http ---------------------------------------------------//
    HttpClientModule
  ],
  providers: [
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
