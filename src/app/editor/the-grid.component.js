"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TheGridComponent = (function () {
    function TheGridComponent() {
        this.itemEditor = false;
        this.textActive = false;
        this.imageActive = false;
        this.columns = [];
        this.rows = [];
        this.gridItem = [];
        this.itemColumn = '1';
        this.itemColumnSpan = '2';
        this.itemRow = '1';
        this.itemRowSpan = '2';
        this.justifyItem = 'stretch';
        this.alignItem = 'stretch';
        this.justifyContent = 'stretch';
        this.alignContent = 'stretch';
        this.alignSelf = 'stretch';
        this.gap = {
            column: '10px',
            row: '10px'
        };
        this.bg = 'blue';
        this.newCol = {
            name: '',
            col: 'auto',
        };
        this.newRow = {
            name: '',
            row: 'auto'
        };
        // same values for justify and align ITEMS
        this.justifyItems = ['start', 'end', 'center', 'stretch'];
        // same values for justify and align CONTENT
        this.justifyContents = ['start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly'];
        this.tempColumns = 'auto auto';
        this.tempRows = 'auto auto';
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
    TheGridComponent.prototype.ngOnInit = function () {
        this.gridItem = new Array(4);
    };
    TheGridComponent.prototype.toggleItemEditor = function () {
        this.itemEditor = !this.itemEditor;
    };
    TheGridComponent.prototype.addCol = function () {
        var n = this.columns.length + 1;
        this.newCol.name = n.toString();
        this.columns.push(this.newCol);
    };
    TheGridComponent.prototype.addRow = function () {
        var n = this.columns.length + 1;
        this.newRow.name = n.toString();
        this.rows.push(this.newRow);
    };
    TheGridComponent.prototype.addElement = function (e) {
        this.textActive = false;
        this.imageActive = false;
        switch (e) {
            case 'text':
                this.textActive = true;
                break;
            case 'image':
                this.imageActive = true;
                break;
        }
    };
    TheGridComponent.prototype.theGrid = function () {
        return {
            'display': 'grid',
            'grid-template-columns': "" + this.tempColumns,
            'grid-template-rows': "" + this.tempRows,
            'grid-column-gap': "" + this.gap.column,
            'grid-row-gap': "" + this.gap.row,
            'justify-items': "" + this.justifyItem,
            'align-items': "" + this.alignItem,
            'justify-content': "" + this.justifyContent,
            'align-content': "" + this.alignContent
        };
    };
    TheGridComponent.prototype.theItems = function () {
        return {
            'grid-column': this.itemColumn + " / span " + this.itemColumnSpan,
            'grid-row': this.itemRow + " / span " + this.itemRowSpan,
            'align-self': "" + this.alignSelf
        };
    };
    TheGridComponent.prototype.applyGridChanges = function (c, r, gp) {
        this.setTemplateColumns(c.value);
        this.setTemplateRows(r.value);
        this.setGridGap(gp);
        var c = this.tempColumns.split(" ");
        var r = this.tempRows.split(" ");
        var a = new Array(c.length * r.length);
        this.gridItem = a;
    };
    TheGridComponent.prototype.applyItemChanges = function (item) {
        var i = item.form.value;
        this.itemColumn = i['item-column'];
        this.itemColumnSpan = i['item-column-span'];
        this.itemRow = i['item-row'];
        this.itemRowSpan = i['item-row-span'];
    };
    TheGridComponent.prototype.setTemplateColumns = function (g) {
        var cc = [];
        Object.keys(g).forEach(function (o) {
            cc.push(g[o]);
        });
        this.tempColumns = cc.join(" ");
    };
    TheGridComponent.prototype.setTemplateRows = function (g) {
        var rr = [];
        Object.keys(g).forEach(function (o) {
            rr.push(g[o]);
        });
        this.tempRows = rr.join(" ");
    };
    TheGridComponent.prototype.setGridGap = function (gap) {
        this.gap = {
            column: gap.value['gap-column'],
            row: gap.value['gap-row']
        };
    };
    TheGridComponent.prototype.setJustifyItems = function (e) {
        this.justifyItem = e;
    };
    TheGridComponent.prototype.setAlignItems = function (e) {
        this.alignItem = e;
    };
    TheGridComponent.prototype.setJustifyContent = function (e) {
        this.justifyContent = e;
    };
    TheGridComponent.prototype.setAlignContent = function (e) {
        this.alignContent = e;
    };
    TheGridComponent.prototype.setAlignSelf = function (e) {
        this.alignSelf = e;
    };
    TheGridComponent.prototype.submit = function (v) {
        console.warn('Val submitted', v);
    };
    return TheGridComponent;
}());
TheGridComponent = __decorate([
    core_1.Component({
        selector: 'app-the-grid',
        templateUrl: './the-grid.component.html'
    }),
    __metadata("design:paramtypes", [])
], TheGridComponent);
exports.TheGridComponent = TheGridComponent;
//# sourceMappingURL=the-grid.component.js.map