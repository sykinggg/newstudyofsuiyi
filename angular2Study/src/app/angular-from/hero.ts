export class Hero {
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ) {  }
}
//TypeScript 编译器为每个public构造函数参数生成一个公共字段