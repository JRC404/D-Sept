import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: string[] = [ "Milk", "Miley Cryus CD", "Bread"];

  getData(): string[] {
    return this.data;
  }

  addData(item: string): void {
    this.data.push(item);
  }

  removeData(item: string): void {
    const index = this.data.indexOf(item);
    if(index !== -1) {
      this.data.splice(index, 1);
    }
  }

  updateData(oldItem: string, newItem: string): void {
    const index = this.data.indexOf(oldItem);
    if (index !== -1) {
      this.data[index] = newItem;
    }
  }

}
