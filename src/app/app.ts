import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeader } from './components/site-header/site-header';
import { SiteFooter } from './components/site-footer/site-footer';
import { GuardianDossierModal } from './components/guardian-dossier-modal/guardian-dossier-modal';
import { DispatchToast } from './components/dispatch-toast/dispatch-toast';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter, GuardianDossierModal, DispatchToast],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
