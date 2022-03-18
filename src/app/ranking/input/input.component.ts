import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

// interface Name {
//   value: Number;
//   viewName: string;
// }

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  cerveja = 0;
  drink = 0;
  destilado = 0;
  valorTotal: number | undefined;
  totalCerveja: any;
  totalDrink: any;
  totalDestilado: any;
  value = 'Clear me';
  show = false;

  constructor(private _bottomSheetRef: MatBottomSheetRef<InputComponent>) { }

  calcularSoma() {
    this.totalCerveja = (this.cerveja * 1);
    this.totalDrink = (this.drink * 1.3);
    this.totalDestilado = (this.destilado * 1.5)

    this.valorTotal = (this.totalCerveja) + (this.totalDrink) + (this.totalDestilado);
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  selectedValue: string | undefined;

  names = [
    { value: 0, viewName: 'Jéssica Campos' },
    { value: 1, viewName: 'Lucas Alves' },
    { value: 2, viewName: 'Gaby Leite' },
  ];

  openNewName() {
    this.show = true;
  }

  ngOnInit(): void {

  }
}
