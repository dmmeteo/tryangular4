import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-video-list',
    templateUrl: './video-list.component.html',
    styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
    title = 'List of videos';
    todayDate; // https://angular.io/docs/ts/latest/guide/pipes.html
    videoList = [
        {
            name: 'Item 1',
            slug: 'item-1',
            embed: 'y72WusrZdyI',
        },
        {
            name: 'Item 2',
            slug: 'item-2',
            embed: '1cbAvypPAO0',
        },
        {
            name: 'Item 3',
            slug: 'item-3',
            embed: 'gfb93nfdt4c',
        },
        {
            name: 'Item 4',
            slug: 'item-4',
            embed: 'fI28Y4_UqIg',
        }
    ]

    constructor() {}

    ngOnInit() {
        this.todayDate = new Date()
    }

    getEmbedUrl(item) {
        return 'https://www.youtube.com/embed/' + item.embed
    }
}
