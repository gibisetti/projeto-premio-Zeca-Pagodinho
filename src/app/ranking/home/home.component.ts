import { Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatTable } from '@angular/material/table';
import { InputComponent } from '../input/input.component';

export interface RankingTable {
  name: string;
  position: number;
  points: number;
}

const ELEMENT_DATA: RankingTable[] = [
  {position: 1, name: 'Jéssica Campos', points: 98},
  {position: 2, name: 'Lucas Alves', points: 90},
  {position: 3, name: 'Gaby Leite', points: 75},
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  showFiller = false;

  constructor(private _bottomSheet: MatBottomSheet) { }

  displayedColumns: string[] = ['position', 'name', 'points'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable)
  table!: MatTable<RankingTable>;

  // addData() {
  //   const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
  //   this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
  //   this.table.renderRows();
  // }

  // removeData() {
  //   this.dataSource.pop();
  //   this.table.renderRows();
  // }

  openBottomSheet(): void {
    this._bottomSheet.open(InputComponent);
  }

  ngOnInit(): void {
  }

}
