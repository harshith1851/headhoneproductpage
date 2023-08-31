import { Component ,ElementRef, OnInit, ViewChild} from '@angular/core';
import { TimelineMax, Power2 } from 'gsap';
@Component({
  selector: 'app-newtec',
  templateUrl: './newtec.component.html',
  styleUrls: ['./newtec.component.scss']
})
export class NewtecComponent implements OnInit {
 

  ngOnInit() {
    this.animateWithTimeline();
  }

  animateWithTimeline() {
    // const boxElement = document.querySelector('.animateme');
    const timeline = new TimelineMax();

    timeline
      .from('.animateme', { x: 200, duration:1, ease: Power2.easeInOut })
      .to('.animateme2', { y: 200, duration:1,ease: Power2.easeInOut })
  }
}
