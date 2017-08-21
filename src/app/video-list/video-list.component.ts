import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-video-list',
    templateUrl: './video-list.component.html',
    styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
    title = 'List of videos';
    // videoList = ['Item 1', 'Item 2', 'Item 3']; //LIST
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
            embed: null
        }
    ]

    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit() {
    }

    getEmbedUrl(item) {
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.embed)
    }
}
