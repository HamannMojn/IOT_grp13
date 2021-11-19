import { Component, OnInit } from '@angular/core';
import { DiscoBallIP } from './Models/discoballIPmodel';
import { ApiclientService } from './apiclient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  discoBallIPList: DiscoBallIP[] = [];

  title = 'frontend';
  discoball:string = "assets/images/disco.png";

  constructor(
    private apiclient: ApiclientService
  ) {}

  ngOnInit(): void {
    this.getDicsoBallIPs();
    console.log("Here are the ips:" + this.discoBallIPList)
  }

  getDicsoBallIPs(): void {
    this.apiclient.getDiscoBallIPs().subscribe(ips => this.discoBallIPList = ips);
  }


}
