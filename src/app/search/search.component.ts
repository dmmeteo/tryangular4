import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchLocation = 'Moon';
    searchQuery: string;
    @Input()
    passedQuery: string;

    constructor(private roueter: Router) {}

    ngOnInit() {
        // console.log(this.passedQuery)
        if (this.searchQuery) {
            this.passedQuery = this.searchQuery
        }
    }

    submitSearch(event, formData) {
        // console.log(event);
        // console.log(formData.value)
        const searchQuery = formData.value['q']
        if (searchQuery) {
            this.roueter.navigate(['/search', {q: searchQuery}])
        }
    }
}
