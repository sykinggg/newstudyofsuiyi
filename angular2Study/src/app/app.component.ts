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
    // myFavoriteNumber = 7;
    //Type '7' is not assignable to type 'string'.
    // console.log(myFavoriteNumber);
    // index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
    /*
    * 注意: 在TypeScript 2.1 之前，如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
    * */
    //TypeScript 2.1 中，编译器会考虑对 myFavoriteNumber 的最后一次赋值来检查类型


    /*
    * 联合类型
    * 联合类型（Union Types）表示取值可以为多种类型中的一种
    * */

    let myFavoriteNumber1: string | number;
    myFavoriteNumber1 = 'seven';
    myFavoriteNumber1 = 7;
    // myFavoriteNumber1 = true;
    //Type 'boolean' is not assignable to type 'number'.

    /*
    * 联合类型使用 | 分隔每个类型
    * */
    //这里的 string | number 的含义是，允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型


    /*
    * 访问联合类型的属性或方法
    * */
    //只能访问此联合类型的所有类型里共有的属性或方法

    // function getLength(something: string | number): number {
        // return something.length;
        //Property 'length' does not exist on type 'string | number'.
    // }

    //访问 string 和 number 的共有属性是没问题的

    function getString(something: string | number): string {
        //Identifier expected.
        return something.toString();
    }

    let myFavoriteNumber2: string | number;
    myFavoriteNumber2 = 'seven';
    console.log(myFavoriteNumber2);
    // console.log(myFavoriteNumber2.length);
    myFavoriteNumber2 = 7;
    console.log(myFavoriteNumber2);
    // console.log(myFavoriteNumber2.length);
    //Property 'length' does not exist on type 'number'.


    /*
    * 对象的类型——接口
    * 在 TypeScript 中，使用接口（Interfaces）来定义对象的类型
    * */

    interface Person {
        name: string;
        age: number
    }

    let person1: Person = {
        name: 'person',
        age: 23
    }

    console.log(person1);
    // 大小写也不能相同
    //{name: "person", age: 23}