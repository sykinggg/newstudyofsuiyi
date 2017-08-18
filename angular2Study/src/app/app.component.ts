import { Component } from '@angular/core';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.scss']
})
export class AppComponent {
  	title = 'app works!';
}
	/**
	 * JavaScript 的类型分为两种
	 * 		原始数据类型
	 *		对象类型
	 */
	// 原始数据类型包括:	布尔值、数值、字符串、null、undefined、Symbol


	/* 布尔值 */
	// 布尔值是最基础的数据类型，在 TypeScript 中，使用 boolean 定义布尔值类型
	let isDone: boolean = false;
	console.log(isDone+'布尔值');
	// 注意，使用构造函数 Boolean 创造的对象不是布尔值
	// let createByNewBooleanboolean: boolean = new Boolean(1);
	// 1.originalObject.ts(16,5): error TS2322: Type 'Boolean' is not assignable to typ
	// e 'boolean'.
	// console.log(createByNewBooleanboolean);
	// 事实上 new Boolean() 返回的是一个 Boolean 对象
	// let createByNewBooleanBoolean: Boolean = new Boolean(1);
	// console.log(createByNewBooleanBoolean);


	/* 数值 */
	let decLiteral: number = 6;
	console.log(decLiteral+'---数值');

	/* 字符串 */
	let stringName: string = "testStringName";
	console.log(stringName + '---字符串');

	/* 空值 */
	// 在 TypeScirpt 中，可以用 void 表示没有任何返回值的函数
	function alertName(): void {
		alert('alert-name');
	}
	// alertName();
	// 声明一个 void 类型的变量只能将它赋值为 undefined 和 null
	let unusable: void = undefined;
	console.log(unusable + '---undefined');

	/* Null 和 Undefined */
	let u: undefined = undefined;
	let n: null = null;
	console.log(u + '---undefined');
	console.log(n + '---null');

	/* 任意值（Any）用来表示允许赋值为任意类型 */
	let anyThing: any = 'Xcat Liu';
	// Uncaught TypeError: anyThing.setName is not a function
	// anyThing.setName('Jerry Lee');
	// anyThing.setName('Jerry Lee').sayHello();
	// anyThing.myName.setFirstName('Cat');
	// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值

	/* 未声明类型的变量 */
	let something;
    something = 'seven';
	something = 7;

	// something.setName('Jerry Lee');
	// 等价于
	// let something: any;
	// something = 'seven';
	// something = 7;

	// something.setName('Jerry Lee');


	/**
	 * 类型推论
	 */
	let myFavoriteNumber = 'seven';
    myFavoriteNumber