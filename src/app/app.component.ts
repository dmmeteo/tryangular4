import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // template: `<h1>{{ title }}</h1><p>{{ discription }}, is cool...</p>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'Angular v4!';
    discription = 'A new app';
    private routeSub: any;
    query: string;

    constructor(private route: ActivatedRoute) {
        this.routeSub = route.params.subscribe(params => {
            // console.log(params)
            this.query = params['q']
        })
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe()
    }
}
