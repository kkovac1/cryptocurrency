import { Component, OnInit } from '@angular/core';
import { CryptocurrencyDetail } from 'src/app/models/CryptocurrencyDetail';
import { CryptoApiService } from 'src/app/services/crypto-api.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  columns = [
    {
      columnId: 'id',
      header: '#',
      cell: (row: CryptocurrencyDetail) => row.id,
    },
    {
      columnId: 'coin',
      header: 'Coin',
      cell: (row: CryptocurrencyDetail) => row.image,
    },
    {
      columnId: 'name',
      header: 'Name',
      cell: (row: CryptocurrencyDetail) => row.name,
    },
    {
      columnId: 'current_price',
      header: 'Current Price',
      cell: (row: CryptocurrencyDetail) => row.current_price,
    },
    {
      columnId: 'market_cap',
      header: 'Market Cap',
      cell: (row: CryptocurrencyDetail) => row.market_cap,
    },
    {
      columnId: 'percentage',
      header: '24h',
      cell: (row: CryptocurrencyDetail) => row.price_change_percentage_24,
    },
  ];

  displayedColumns: string[] = [];

  dataSource: CryptocurrencyDetail[] = [];

  constructor(private readonly cryptoService: CryptoApiService) {
    this.displayedColumns = this.columns.map(x => x.columnId);
    console.log(this.displayedColumns);

    cryptoService.getCryptos().subscribe((res) => {
      this.dataSource = res;
      console.log(res[0].id);

    });
  }

  ngOnInit(): void {}
}
