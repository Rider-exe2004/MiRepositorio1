import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardproducto',
  standalone: false,
  templateUrl: './cardproducto.component.html',
  styleUrl: './cardproducto.component.css'
})
export class CardproductoComponent  implements OnInit {
producto:any={};
  
  constructor(private activatedroute:ActivatedRoute){
  }
  ngOnInit():void {
  
  }
}
