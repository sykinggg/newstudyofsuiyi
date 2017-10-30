import { Component } from '@angular/core';
import { fadeIn } from '../animations/fade-in';

@Component({
	templateUrl: './plugin.component.html',
	styleUrls: ['./plugin.component.scss'],
	animations:[ fadeIn ]
})

export class PluginComponent {

}
