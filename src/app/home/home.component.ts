import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    private req: any;
    homeImageList = []; // not declared but equal

    constructor(private http: Http, private router: Router) {}

    ngOnInit() {
        this.req = this.http.get('assets/json/videos.json').subscribe(data => {
            data.json().filter(item => {
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
