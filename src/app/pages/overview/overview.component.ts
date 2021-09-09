import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CryptocurrencyDetail } from 'src/app/models/CryptocurrencyDetail';
import { CryptoApiService } from 'src/app/services/crypto-api.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = [
    'market_cap_rank',
    'name',
    'current_price',
    'market_cap',
    'price_change_percentage_24h',
  ];

  public dataSource: MatTableDataSource<CryptocurrencyDetail> =
    new MatTableDataSource<CryptocurrencyDetail>([]);
  @ViewChild(MatPaginator) private paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private readonly cryptoService: CryptoApiService) {

    cryptoService.getCryptos().subscribe((res) => {
      this.dataSource.data = res;
      console.log(this.dataSource);
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
