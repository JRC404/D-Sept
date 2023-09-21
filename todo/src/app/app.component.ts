import { Component, HostListener } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  items: string[];
  newItem: string;
  updatedItem: string;
  editingIndex: number = -1; // Initialize with -1 to indicate no item is being edited

  constructor(private dataService: DataService) {
    this.items = this.dataService.getData();
    this.newItem = '';
    this.updatedItem = '';
  }

  addItem(): void {
    if (this.newItem.trim() !== '') {
      this.dataService.addData(this.newItem);
      this.items = this.dataService.getData();
      this.newItem = '';
    }
  }

  removeItem(index: number): void {
    const item = this.items[index];
    this.dataService.removeData(item);
    this.items = this.dataService.getData();
  }

  startEditing(index: number): void {
    this.editingIndex = index;
    this.updatedItem = this.items[index];
  }

  updateItem(): void {
    if (this.updatedItem.trim() !== '') {
      this.dataService.updateData(this.items[this.editingIndex], this.updatedItem);
      this.items = this.dataService.getData();
      this.editingIndex = -1; // Reset editing index
      this.updatedItem = ''; // Clear the input field after updating
    }
  }

  @HostListener('document:keydown.enter')
  onEnterKey(): void {
    this.addItem();
  }

}
