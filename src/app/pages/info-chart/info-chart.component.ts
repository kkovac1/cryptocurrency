import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoApiService } from 'src/app/services/crypto-api.service';

@Component({
  selector: 'app-info-chart',
  templateUrl: './info-chart.component.html',
  styleUrls: ['./info-chart.component.scss'],
})
export class InfoChartComponent implements OnInit {

  public cryptoInfo: any;

  constructor(
    private cryptoService: CryptoApiService,
    private route: ActivatedRoute
  ) {
    const coinId = this.route.snapshot.paramMap.get('id');
    this.cryptoService.getCoinById(coinId).subscribe((res) => this.cryptoInfo = res );
  }

  ngOnInit(): void {}
}
