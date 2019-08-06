import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private authService: NbAuthService, private router: Router) { }

    ngOnInit() {
    }

    logout() {
        this.authService.logout('email').subscribe(
            (_void) => {
                this.router.navigate(['/auth/login']);
            }
        );
    }
}
