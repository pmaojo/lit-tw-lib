// src/components/atoms/Table/Table.ts
import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

interface TableColumn {
  key: string;
  header: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: any) => unknown;
}

interface TableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
  striped?: boolean;
  hoverable?: boolean;
  compact?: boolean;
  bordered?: boolean;
}

@customElement('custom-table')
export class Table extends LitElement {
  @property({ type: Array }) columns: TableColumn[] = [];
  @property({ type: Array }) data: Record<string, any>[] = [];
  @property({ type: Boolean }) striped = false;
  @property({ type: Boolean }) hoverable = false;
  @property({ type: Boolean }) compact = false;
  @property({ type: Boolean }) bordered = false;

  render() {
    return html`
      <div class="overflow-x-auto">
        <table class="${this.getTableClasses()}">
          ${this.renderHeader()}
          ${this.renderBody()}
        </table>
      </div>
    `;
  }

  private getTableClasses(): string {
    return `
      min-w-full divide-y divide-gray-200
      ${this.bordered ? 'border border-gray-200' : ''}
      ${this.compact ? 'table-compact' : ''}
    `;
  }

  private renderHeader() {
    return html`
      <thead class="bg-gray-50">
        <tr>
          ${this.columns.map(column => html`
            <th 
              scope="col" 
              class="${this.getHeaderClasses(column)}"
            >
              ${column.header}
              <slot name="header-${column.key}"></slot>
            </th>
          `)}
        </tr>
      </thead>
    `;
  }

  private getHeaderClasses(column: TableColumn): string {
    return `
      px-6 py-3 text-${column.align || 'left'}
      text-xs font-medium text-gray-500 uppercase tracking-wider
      ${this.bordered ? 'border-x border-gray-200' : ''}
    `;
  }

  private renderBody() {
    return html`
      <tbody class="bg-white divide-y divide-gray-200">
        ${this.data.map((row, index) => html`
          <tr class="${this.getRowClasses(index)}">
            ${this.columns.map(column => html`
              <td class="${this.getCellClasses(column)}">
                ${this.renderCell(column, row)}
              </td>
            `)}
          </tr>
        `)}
      </tbody>
    `;
  }

  private getRowClasses(index: number): string {
    return `
      ${this.striped && index % 2 ? 'bg-gray-50' : ''}
      ${this.hoverable ? 'hover:bg-gray-100' : ''}
    `;
  }

  private getCellClasses(column: TableColumn): string {
    return `
      px-6 py-4 whitespace-nowrap text-sm text-gray-500
      text-${column.align || 'left'}
      ${this.bordered ? 'border-x border-gray-200' : ''}
      ${this.compact ? 'py-2' : ''}
    `;
  }

  private renderCell(column: TableColumn, row: Record<string, any>) {
    if (column.render) {
      return column.render(row[column.key], row);
    }
    return row[column.key];
  }
}