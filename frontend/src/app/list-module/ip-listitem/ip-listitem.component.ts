import { Component, Input, OnInit } from '@angular/core';
import { DiscoBallIP } from 'app/Models/discoballIPmodel';
import { ApiclientService } from 'app/apiclient.service';

@Component({
  selector: 'app-ip-listitem',
  templateUrl: './ip-listitem.component.html',
  styleUrls: ['./ip-listitem.component.css']
})
export class IpListitemComponent implements OnInit {

  @Input() discoballIp!: DiscoBallIP;


  constructor(private apiclientservice: ApiclientService) { }

  public SendMotor(): void {
    console.log('turn motor on or off', this.discoballIp);
    this.apiclientservice.turnOn_OffMotor(this.discoballIp)  
  }

  public SendLED(): void {
    console.log('turn LED on or off', this.discoballIp);
    this.apiclientservice.turnOn_OffLED(this.discoballIp);
  }

  ngOnInit(): void {
  }

}
