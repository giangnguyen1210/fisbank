// pagination.component.ts

import { Component, EventEmitter, Input, Output } from "@angular/core";

// ... (existing imports)

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() pageNumber!: number;
  @Input() pageSize!: number;
  @Input() totalSize: number = 10;
  @Output() pageChange = new EventEmitter<number>();

  goToPage(pageNumber: number): void {
    if (pageNumber > 0 && pageNumber <= this.totalSize) {
      this.pageChange.emit(pageNumber);
    }
  }
}
