import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-switch-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-content.component.html',
  styleUrl: './switch-content.component.css'
})
export class SwitchContentComponent {
   bikes: string[] = ["Yamaha R15", "KTM Duke 390", "Royal Enfield Classic 350", "Honda CBR 650R", "Suzuki Gixxer SF", "Kawasaki Ninja 300"];
   cars: string[] = ["Toyota Corolla", "Honda Civic", "Ford Mustang", "Tesla Model 3", "Hyundai Creta", "Maruti Suzuki Swift"];
   selectedItems: string[] = [];
   name:string='';

   bikesButton(){
    
    this.selectedItems=this.bikes;
   }
   carsButton(){
    
    this.selectedItems=this.cars;
   }
   onclick(value:string){
    this.name = value;

   }

}
