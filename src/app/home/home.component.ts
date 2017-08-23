import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    homeImageList = [
        {
            image: 'assets/images/nature/4.jpg',
            title: 'First slide label',
            discription: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
            link: '/videos/video-1'
        }, {
            image: 'assets/images/nature/5.jpg',
            title: 'Second slide label',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: '/videos/video-2'
        }, {
            image: 'assets/images/nature/6.jpg',
            title: 'Third slide label',
            discription: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
            link: '/videos/video-3'
        }
    ];

    constructor(private router: Router) {
    }

    ngOnInit() {
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
