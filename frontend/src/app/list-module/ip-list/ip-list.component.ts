import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiclientService } from 'app/apiclient.service';
import { DiscoBallIP } from 'app/Models/discoballIPmodel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ip-list',
  templateUrl: './ip-list.component.html',
  styleUrls: ['./ip-list.component.css']
})
export class IpListComponent implements OnInit, OnDestroy {

  discoBallIps$: Observable<DiscoBallIP[]> | null = null;

  constructor(private apiclient: ApiclientService) {
  }

  ngOnInit(): void {
    this.discoBallIps$ = this.apiclient.getDiscoBallIPs();
  }

  ngOnDestroy(): void {
    this.discoBallIps$ = null;
  }

}
