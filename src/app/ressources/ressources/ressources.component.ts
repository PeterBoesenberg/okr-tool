import { Component, OnInit, SecurityContext } from '@angular/core';
import { Ressource } from '../ressource.model';
import { RESSOURCES } from '../ressources';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.scss']
})
export class RessourcesComponent implements OnInit {
  ressources: Ressource[] = RESSOURCES;
  constructor(public sanitizer: DomSanitizer) {}
  ngOnInit() {}

  safeURL(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
