import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

import {VideoItem} from '../videos/video';
import {VideoService} from '../videos/video.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [VideoService]
})
export class HomeComponent implements OnInit, OnDestroy {
    private req: any;
    homeImageList = [] as [VideoItem]; // not declared but equal
    videoListDefaultImages = 'assets/images/natere/5.jpg';

    constructor(private http: Http, private router: Router, private _video: VideoService) {}

    ngOnInit() {
        this.req = this._video.list().subscribe(data => {
            data.filter(item => {
                if (item.featured) {
                    this.homeImageList.push(item)
                }
            })
        })
    }

    ngOnDestroy() {
        this.req.unsubscribe()
    }

    preventNormal(event: MouseEvent, image: any) { // or event: HTMLElement
        if (!image.prevented) {
            event.preventDefault()
            // // image.setAttribute('href', '/videos')
            // image.link = '/videos'
            // image.prevented = true
            this.router.navigate(['./videos'])
        }

    }
}
