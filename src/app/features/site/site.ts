import { Component, computed, signal, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SiteDialog } from '../../dialog/site-dialog/site-dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Sites {
  id: string;
  name: string;
  clientName: string;
  clientId: string;
  address: string;
  securityLevel: 'FAIBLE' | 'MOYEN' | 'ÉLEVÉ';
  status: 'ACTIF' | 'INACTIF';
  radius: number;
  assignedAgents: number;
  qrCodeToken: string;
  latitude: number;
  longitude: number;
}

type SecurityLevel = 'FAIBLE' | 'MOYEN' | 'ÉLEVÉ';

@Component({
  selector: 'app-site',
  imports: [MatTooltipModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './site.html',
  styleUrl: './site.css',
})
export class Site {


    // Totaux
  totalSites = computed(() => this.sites().length);
  totalActif = computed(() => this.sites().filter(site => site.status === 'ACTIF').length);
  totalInactif = computed(() => this.sites().filter(site => site.status !== 'ACTIF').length);

  filterStatus = signal<'ALL' | 'ACTIF' | 'INACTIF'>('ALL');

sitesFiltered = computed(() => {
  if (this.filterStatus() === 'ALL') return this.sites();
  if (this.filterStatus() === 'ACTIF')
    return this.sites().filter(site => site.status === 'ACTIF');
  return this.sites().filter(site => site.status !== 'ACTIF');
});

// Données statiques des sites
  public sitesData = signal<Sites[]>([
    {
      id: 'site-001',
      name: 'Site A23 - Entrée principale',
      clientName: 'Banque Centrale',
      clientId: 'cli-bc01',
      address: '123 Avenue de la République, Paris',
      securityLevel: 'ÉLEVÉ',
      status: 'ACTIF',
      radius: 100,
      assignedAgents: 8,
      qrCodeToken: 'QR-A23BC78',
      latitude: 48.8566,
      longitude: 2.3522,
    },
    {
      id: 'site-002',
      name: 'Supermarché Nord',
      clientName: 'Supermarché Prima',
      clientId: 'cli-sp02',
      address: '45 Rue du Commerce, Lyon',
      securityLevel: 'MOYEN',
      status: 'ACTIF',
      radius: 50,
      assignedAgents: 4,
      qrCodeToken: 'QR-SP45X9',
      latitude: 45.764,
      longitude: 4.8357,
    },
    {
      id: 'site-003',
      name: 'Terminal 2 - Contrôle',
      clientName: 'Aéroport International',
      clientId: 'cli-ai03',
      address: 'Aéroport International, Marseille',
      securityLevel: 'ÉLEVÉ',
      status: 'ACTIF',
      radius: 200,
      assignedAgents: 12,
      qrCodeToken: 'QR-AI77KL',
      latitude: 43.4367,
      longitude: 5.215,
    },
    {
      id: 'site-004',
      name: 'Parking Sud',
      clientName: 'Supermarché Prima',
      clientId: 'cli-sp02',
      address: '45 Rue du Commerce, Lyon',
      securityLevel: 'FAIBLE',
      status: 'INACTIF',
      radius: 30,
      assignedAgents: 0,
      qrCodeToken: 'QR-PK23MN',
      latitude: 45.763,
      longitude: 4.836,
    },
    {
      id: 'site-005',
      name: "Hall d'accueil",
      clientName: 'Banque Centrale',
      clientId: 'cli-bc01',
      address: '123 Avenue de la République, Paris',
      securityLevel: 'MOYEN',
      status: 'ACTIF',
      radius: 50,
      assignedAgents: 3,
      qrCodeToken: 'QR-HA56RT',
      latitude: 48.857,
      longitude: 2.353,
    },
    {
      id: 'site-006',
      name: 'Zone de fret',
      clientName: 'Aéroport International',
      clientId: 'cli-ai03',
      address: 'Aéroport International, Marseille',
      securityLevel: 'ÉLEVÉ',
      status: 'ACTIF',
      radius: 300,
      assignedAgents: 6,
      qrCodeToken: 'QR-ZF89WE',
      latitude: 43.437,
      longitude: 5.216,
    },
  ]);

  showModal = signal(false);

  // --- ÉTAT DE LA RECHERCHE ET PAGINATION ---
  searchQuery = '';
  currentPage = signal(1);
  itemsPerPage = 4;

  // Formulaire réinitialisable
  newSite: any = this.getDefaultSiteValue();

  // Computed values pour les statistiques
  sites = computed(() => this.sitesData());

  activeSitesCount = computed(
    () => this.sitesData().filter((site) => site.status === 'ACTIF').length,
  );

  private getDefaultSiteValue() {
    return {
      name: '',
      clientName: '',
      address: '',
      securityLevel: 'MOYEN',
      status: 'ACTIF',
      radius: 50,
      latitude: '',
      longitude: '',
    };
  }

  // --- LOGIQUE DE FILTRAGE ---
  filteredSites = computed(() => {
    const sites = this.sitesData();
    const query = this.searchQuery.toLowerCase().trim();

    if (!query) return sites;

    return sites.filter(
      (site) =>
        site.name?.toLowerCase().includes(query) ||
        site.clientName?.toLowerCase().includes(query) ||
        site.address?.toLowerCase().includes(query),
    );
  });

  // --- LOGIQUE DE PAGINATION ---
  paginatedSites = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredSites().slice(start, end);
  });

  totalPages = computed(() => Math.ceil(this.filteredSites().length / this.itemsPerPage));

  startIndex = computed(() =>
    this.filteredSites().length === 0 ? 0 : (this.currentPage() - 1) * this.itemsPerPage + 1,
  );

  endIndex = computed(() =>
    Math.min(this.currentPage() * this.itemsPerPage, this.filteredSites().length),
  );

  // --- ACTIONS SUR LES SITES ---
  toggleStatus(siteId: string) {
    this.sitesData.update((sites) =>
      sites.map((site) =>
        site.id === siteId
          ? { ...site, status: site.status === 'ACTIF' ? 'INACTIF' : 'ACTIF' }
          : site,
      ),
    );
  }

  addSite(site: Sites) {
    this.sitesData.update((sites) => [...sites, site]);
  }

  // --- ACTIONS DE L'INTERFACE ---
  onSearch() {
    this.currentPage.set(1);
  }

  previousPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((p) => p - 1);
    }
  }

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((p) => p + 1);
    }
  }

  goToPage(page: number | string) {
    if (typeof page === 'number') {
      this.currentPage.set(page);
    }
  }

  saveSite() {
    if (!this.newSite.name || !this.newSite.clientName) {
      alert('Veuillez remplir les champs obligatoires');
      return;
    }

    const site: Sites = {
      id: `site-${Date.now()}`,
      name: this.newSite.name,
      clientName: this.newSite.clientName,
      clientId: 'cli-' + Math.random().toString(36).substr(2, 4),
      address: this.newSite.address || '',
      securityLevel: this.newSite.securityLevel as SecurityLevel,
      status: 'ACTIF',
      radius: Number(this.newSite.radius) || 50,
      assignedAgents: 0,
      qrCodeToken: 'QR-' + Math.random().toString(36).toUpperCase().substr(0, 8),
      latitude: parseFloat(this.newSite.latitude) || 0,
      longitude: parseFloat(this.newSite.longitude) || 0,
    };

    this.addSite(site);
    this.closeModal();
  }

  closeModal() {
    this.showModal.set(false);
    this.newSite = this.getDefaultSiteValue();
  }

getLevelClass(level: SecurityLevel): string {
  const classes: Record<SecurityLevel, string> = {
    FAIBLE: 'bg-light text-secondary border',
    MOYEN: 'bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25',
    ÉLEVÉ: 'bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25',
  };
  return classes[level] || classes.MOYEN;
}

  getPageNumbers(): (number | string)[] {
    const total = this.totalPages();
    const current = this.currentPage();
    const delta = 2;

    if (total <= 1) return [1];

    const range: number[] = [];
    const rangeWithDots: (number | string)[] = [];
    let l: number | undefined;

    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
        range.push(i);
      }
    }

    range.forEach((i) => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  }
  constructor(private dialog: MatDialog) {}

  openAddSiteDialog() {
  this.dialog.open(SiteDialog, {
    width: '500px',
    disableClose: true
  });
}


}
