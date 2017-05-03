import { Component } from '@angular/core';

@Component({
    selector: 'key-blur',
    template: `
        <input type="text" #box (keyup.enter)="update(box.value)" (blur)="update(box.value)">
        <p>{{value}}</p>`
})

export class keyBlur {
    value="";

    update(value: string) {
        this.value = value;
    }
}