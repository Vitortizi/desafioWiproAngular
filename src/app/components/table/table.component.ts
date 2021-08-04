import { Component, OnInit } from '@angular/core';
import { CriptoService } from 'src/app/services/cripto/cripto.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tradeArray: any;
  dataArray: any;

  constructor(private cripto: CriptoService) { }

  ngOnInit(): void {
    this.cripto.getBtcTrades().subscribe((res) => {
      this.dataArray = res;

      const data = [];

      for (let e = 0; e < 5; e++) {
        data.push(res[e]);
      }

      this.tradeArray = data;
    });
  }

  pagination() {
    const data = [];
    const qtd = this.tradeArray.length + 5;

    for (let e = 0; e < qtd; e++) {
      console.log(this.dataArray[e])
      data.push(this.dataArray[e]);
    }

    this.tradeArray = data;

  }

}
