import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-image',
  standalone: true,
  imports: [],
  templateUrl: './toggle-image.component.html',
  styleUrl: './toggle-image.component.css'
})
export class ToggleImageComponent {
  data:string = "zoro"
  imagePath:string = "../../public/zoro.jpg"
  toggle(){
    if(this.data=="sanji"){
      this.imagePath="../../public/images/zoro.jpg";
      this.data= "zoro";
    }
    else{
      this.imagePath="../../public/onepieceLogo.jpg"
      this.data="sanji";
    }
  }
}
