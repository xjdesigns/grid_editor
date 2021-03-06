import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-the-grid',
  templateUrl: './the-grid.component.html'
})
export class TheGridComponent implements OnInit {
  itemEditor: boolean = false;
  textActive: boolean = false;
  imageActive: boolean = false;
  columns = [];
  rows = [];
  gridItem = [];
  itemColumn = '1';
  itemColumnSpan = '2';
  itemRow = '1';
  itemRowSpan = '2';
  justifyItem = 'stretch';
  alignItem = 'stretch';
  justifyContent = 'stretch';
  alignContent = 'stretch';
  alignSelf = 'stretch';
  gap = {
    column: '10px',
    row: '10px'
  };
  bg = 'blue';
  newCol = {
    name: '',
    col: 'auto',
  };
  newRow = {
    name: '',
    row: 'auto'
  };
  // same values for justify and align ITEMS
  justifyItems = ['start', 'end', 'center', 'stretch'];
  // same values for justify and align CONTENT
  justifyContents = ['start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly'];

  tempColumns = 'auto auto';
  tempRows = 'auto auto';

  constructor() {
    this.columns = [{
      name: '0',
      col: 'auto'
    }, {
      name: '1',
      col: 'auto'
    }];
    this.rows = [{
      name: '0',
      row: 'auto'
    }, {
      name: '1',
      row: 'auto'
    }];
  }

  ngOnInit() {
    this.gridItem = new Array(4);
  }

  toggleItemEditor() {
    this.itemEditor = !this.itemEditor;
  }

  addCol() {
    let n = this.columns.length + 1
    this.newCol.name = n.toString();
    this.columns.push(this.newCol);
  }

  addRow() {
    let n = this.columns.length + 1
    this.newRow.name = n.toString();
    this.rows.push(this.newRow);
  }

  addElement(e) {
    this.textActive = false;
    this.imageActive = false;

    switch(e) {
      case 'text':
        this.textActive = true;
        break;
      case 'image':
        this.imageActive = true;
        break;
    }
  }

  theGrid() {
    return {
      'display': 'grid',
      'grid-template-columns': `${this.tempColumns}`,
      'grid-template-rows': `${this.tempRows}`,
      'grid-column-gap': `${this.gap.column}`,
      'grid-row-gap': `${this.gap.row}`,
      'justify-items': `${this.justifyItem}`,
      'align-items': `${this.alignItem}`,
      'justify-content': `${this.justifyContent}`,
      'align-content': `${this.alignContent}`
    }
  }

  theItems() {
    return {
      'grid-column': `${this.itemColumn} / span ${this.itemColumnSpan}`,
      'grid-row': `${this.itemRow} / span ${this.itemRowSpan}`,
      'align-self': `${this.alignSelf}`
    }
  }

  applyGridChanges(c, r, gp) {
    this.setTemplateColumns(c.value);
    this.setTemplateRows(r.value);
    this.setGridGap(gp);
    var c = this.tempColumns.split(" ") as any;
    var r = this.tempRows.split(" ") as any;
    var a = new Array(c.length * r.length);
    this.gridItem = a;
  }

  applyItemChanges(item) {
    var i = item.form.value;
    this.itemColumn = i['item-column'];
    this.itemColumnSpan = i['item-column-span'];
    this.itemRow = i['item-row'];
    this.itemRowSpan = i['item-row-span'];
  }

  setTemplateColumns(g) {
    let cc = [];
    Object.keys(g).forEach((o) => {
      cc.push(g[o]);
    });
    this.tempColumns = cc.join(" ");
  }

  setTemplateRows(g) {
    let rr = [];
    Object.keys(g).forEach((o) => {
      rr.push(g[o]);
    });
    this.tempRows = rr.join(" ");
  }

  setGridGap(gap) {
    this.gap = {
      column: gap.value['gap-column'],
      row: gap.value['gap-row']
    }
  }

  setJustifyItems(e) {
    this.justifyItem = e;
  }

  setAlignItems(e) {
    this.alignItem = e;
  }

  setJustifyContent(e) {
    this.justifyContent = e;
  }

  setAlignContent(e) {
    this.alignContent = e;
  }

  setAlignSelf(e) {
    this.alignSelf = e;
  }

  submit(v) {
    console.warn('Val submitted', v);
  }
}
