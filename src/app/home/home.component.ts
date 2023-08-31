import { Component, OnInit,AfterViewInit } from '@angular/core';
import { gsap , Power2 } from 'gsap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {
  ngOnInit() {
  }
  ngAfterViewInit(){
    const timeline = gsap.timeline();
    timeline
      .from('.animateme', {opacity:0, y: -200, duration:1,  })
      timeline.from('.animateme2', { opacity:0,x: 200, duration:1 })
  }
 
      }

