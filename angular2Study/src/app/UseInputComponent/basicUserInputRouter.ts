import { Component } from '@angular/core';

@Component({
    selector: 'basicUserInputRouter',
    template: `
        <h2>用户输入</h2>
        <h3>my-app</h3>
        <my-app>Loading AppComponent content here ...</my-app>
        <h3>click-me</h3>
        <click-me></click-me>
        <h3>event-keyup</h3>
        <event-keyup></event-keyup>
        <h3>loop-back</h3>
        <loop-back></loop-back>
        <h3>key-up2</h3>
        <key-up2></key-up2>
        <h3>key-enter</h3>
        <key-enter></key-enter>
        <h3>key-blur</h3>
        <key-blur></key-blur>
        <h3>in-conclusion</h3>
        <in-conclusion></in-conclusion>
    `
})
export class basicUserInputRouter {

}