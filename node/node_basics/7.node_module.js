/*

	Node.js模块系统

*/
// 为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统
// 模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的
/* 创建模块 */


 var hello = require('./7.hello');
 /* 注意: 引用的模块文件名称是7.hello.js */
 hello.world();

 /* 代码描述 */
 // 代码 require('./hello') 引入了当前目录下的7.hello.js文件（./ 为当前目录，node.js默认后缀为js）
 /* Node.js 提供了exports 和 require 两个对象 */
 // exports 是模块公开的接口
 // require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象

 /*
	扩展
 */
 /* 7.hello.js 通过 exports 对象把 world 作为模块的访问接口 */
 /* 在 main.js 中通过 require('./hello') 加载这个模块 */
 /* 然后就可以直接访 问 hello.js 中 exports 对象的成员函数了 */
 /* 语法 */
 // module.exports = function() {
 		// ...
 // }
 <table id="spec_attr" style="display: none">
    <tr class="spec_attr">
        <td class="js-color">
            <button type="button"></button>
            <input class="button_val color_id" type="hidden" name="color_id[]">
        </td>
        <td><input item="spec_2" name="spec_2[]" type="text" class="text width11 spec_2" /></td>
        <td><input item="price" name="price[]" type="text" class="text width11 price" /></td>
        <td><input item="stock" name="stock[]" type="text" class="text width11 stock" /></td>
        <td><input item="sku" name="sku[]" type="text" class="sku text width6 sku" /></td>
        <td>
            <i onClick="addList_spec_dete(this)" class="delete_btn"></i>
        </td>
        <td class="iframe_update">
        </td>
        <td class="show_img">
            <img style="width:28px; height:28px;position: relative; top: 4px;display: none;" src="" alt="">
            <input class="img_src" type="hidden" name="img_url[]">
        </td>
    </tr>
</table>