import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  flightStatus = 'Space shuttle ready for takeoff!';
   readyLiftoff: boolean = true;
   leftBorder = true;
   rightBorder = true;
   topBorder = true;
   bottomBorder = true;

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  borderPolice(width, height){
    if (width <= -20000 || width >= 170000 || height <= 0 || height >=340000){
      this.color = 'orange'
    } else this.color = 'blue';
    if (width <= -20000){
      this.leftBorder = false;
    } else this.leftBorder = true;
    if (width >= 170000){
      this.rightBorder = false;
    } else this.rightBorder = true;
    if (height <= 0){
      this.bottomBorder = false;
    } else this.bottomBorder = true;
    if (height >= 340000){
      this.topBorder = false;
    } else this.topBorder = true;
  }

  verifyLaunch() {
    let launchReady = confirm('Proceed to launch?');
    if (launchReady){
      this.flightStatus = 'Shuttle in flight.';
      this.color = 'blue';
      this.height += 10000;
      this.readyLiftoff = false
    }
  }
  alertLand(rocketImage){
    alert('The shuttle is landing. Landing gear engaged.');
    this.flightStatus = 'The shuttle has landed.';
    this.color = 'green';
    this.height = 0;
    rocketImage.style.bottom = '0px';
    this.readyLiftoff = true;
  }
  abort(rocketImage){
    let abortReady = confirm('Proceed with abort process?');
    if (abortReady){
      this.flightStatus = 'Mission aborted.';
      this.color = 'red';
      this.height = 0;
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';
      this.readyLiftoff = true;
    }
  }
  moveRocket(rocketImage, direction){
    if (direction === 'right'){
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
      console.log(movement)
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
      this.height = this.height - 10000;
    }
    console.log(this.width)
    this.borderPolice(this.width, this.height)
  }
}
