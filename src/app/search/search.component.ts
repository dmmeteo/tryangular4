import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchLocation = 'Moon';
    searchQuery: any;

    constructor(private roueter: Router) {}

    ngOnInit() {
    }

    submitSearch(event, formData) {
        console.log(event);
        console.log(formData.value)
        let query = formData.value['q']
        if (query) {
            this.roueter.navigate(['/search', {q: query}])
        }
    }
}
