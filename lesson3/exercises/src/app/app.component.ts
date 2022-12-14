import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  flightStatus = 'Space shuttle ready for takeoff!';


  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  verifyLaunch() {
    let launchReady = confirm('Proceed to launch?');
    if (launchReady){
      this.flightStatus = 'Shuttle in flight.';
      this.color = 'blue';
      this.height += 10000
    }
  }
  alertLand(rocketImage){
    alert('The shuttle is landing. Landing gear engaged.');
    this.flightStatus = 'The shuttle has landed.';
    this.color = 'green';
    this.height = 0;
    rocketImage.style.bottom = '0px';
  }
  abort(rocketImage){
    let abortReady = confirm('Proceed with abort process?');
    if (abortReady){
      this.flightStatus = 'Mission aborted.';
      this.color = 'red';
      this.height = 0;
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';
    }
  }
  moveRocket(rocketImage, direction){
    if (direction === 'right'){
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000
    }
    if (direction === 'left'){
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }
    if (direction === 'up'){
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    if (direction === 'down'){
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    console.log(this.width)
  }
}
