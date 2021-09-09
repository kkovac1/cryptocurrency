import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CryptoApiService } from './services/crypto-api.service';
import { OverviewComponent } from './pages/overview/overview.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AppComponent, OverviewComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [CryptoApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
