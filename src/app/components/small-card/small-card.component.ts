import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit{

  @Input()
  photoCover:string = "https://richestsoft.com/blog/wp-content/uploads/2022/12/What-is-Angular.webp"
  
  @Input()
  cardTitle:string = "Quer conhecer mais sobre o Angular"

  constructor() {}

  ngOnInit(): void {    
  }

}
