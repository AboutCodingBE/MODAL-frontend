import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Archive {
  id: number;
  name: string;
  date: string;
  fileCount: number;
  status: 'ANALYSED' | 'INGESTED';
}

@Component({
  selector: 'app-archive-browser',
  imports: [FormsModule],
  templateUrl: './archive-browser.html',
  styleUrl: './archive-browser.css',
})
export class ArchiveBrowser {
  archives: Archive[] = [
    { id: 1, name: 'ADVN_VEA260_VUJO', date: '2026-02-13', fileCount: 438, status: 'ANALYSED' },
    {
      id: 2,
      name: 'Collectie_Van_Damme_2025',
      date: '2026-01-20',
      fileCount: 1250,
      status: 'INGESTED',
    },
    {
      id: 3,
      name: 'Radio_Archief_VRT_S01',
      date: '2026-01-05',
      fileCount: 89,
      status: 'ANALYSED',
    },
  ];

  modalOpen = signal(false);
  archiveName = signal('');
  folderPath = signal('');

  openModal() {
    this.modalOpen.set(true);
  }

  closeModal() {
    this.modalOpen.set(false);
    this.archiveName.set('');
    this.folderPath.set('');
  }

  async selectFolder() {
    try {
      // showDirectoryPicker is available in Chromium-based browsers (Chrome 86+, Edge 86+)
      const handle = await (window as Window & { showDirectoryPicker?: () => Promise<FileSystemDirectoryHandle> }).showDirectoryPicker?.();
      if (handle) {
        this.folderPath.set(handle.name);
      }
    } catch {
      // User cancelled the picker — no action needed
    }
  }

  ingestArchive() {
    console.log(this.folderPath());
  }
}
