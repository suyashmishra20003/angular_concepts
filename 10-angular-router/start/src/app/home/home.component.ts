import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    fragmentSubscriber: any
    constructor(
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.fragmentSubscriber = this.activeRoute.fragment.subscribe((data) => {
            this.scrollToSectionHandler(data)
        })
    }

    scrollToSectionHandler(fragment: string) {
        document.getElementById(fragment).scrollIntoView({ behavior: 'smooth' })
    }

    ngOnDestroy(): void {
        this.fragmentSubscriber.unsubscribe()
    }
}