import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CryptoApiService } from './services/crypto-api.service';
import { OverviewComponent } from './pages/overview/overview.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { InfoChartComponent } from './pages/info-chart/info-chart.component';

@NgModule({
  declarations: [AppComponent, OverviewComponent, InfoChartComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [CryptoApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
