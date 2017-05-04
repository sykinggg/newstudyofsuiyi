export class Hero {
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ) {  }
}
//TypeScript 编译器为每个public构造函数参数生成一个公共字段
//alterEgo是可选的，调用构造函数时可省略，注意alterEgo?中的问号 (?)