import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-multiple-images',
  standalone: true,
  imports: [],
  templateUrl: './toggle-multiple-images.component.html',
  styleUrl: './toggle-multiple-images.component.css'
})
export class ToggleMultipleImagesComponent {
imagePath='../../public/images/zoro.jpg';
value:string="Zoro"
toggle(value:string){
  if(value=="zoro"){
    this.imagePath="../../public/images/zoro.jpg"
    this.value="Zoro"
  }
  else if(value=="nature"){
    this.imagePath = "../../public/images/nature.jpg"
    this.value="Nature"
  }
  else if(value=="car"){
    this.imagePath = "../../public/images/car.png"
    this.value="Car"
  }
}

}
