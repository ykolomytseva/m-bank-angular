import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    logoUrl: string = 'assets/images/white-logo.png';
    classApplied = false;
    sidebarClassApplied = false;
    isSticky: boolean = false;

    constructor(public router: Router) {
        // Listen for route changes
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.updateLogoUrl();
            }
        });
    }

    ngOnInit() {
        this.updateLogoUrl();
    }

    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    // Method to close burger menu when menu item is clicked
    closeMenu() {
        this.classApplied = false;
    }

    sidebarToggleClass() {
        this.sidebarClassApplied = !this.sidebarClassApplied;
    }

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition =
            window.scrollY ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        this.isSticky = scrollPosition >= 50;
    }

    private updateLogoUrl() {
        if (this.router.url === '/' || this.router.url === '/index-2') {
            this.logoUrl = 'assets/images/white-logo.png';
        } else {
            this.logoUrl = 'assets/images/black-logo.png';
        }
    }
}
