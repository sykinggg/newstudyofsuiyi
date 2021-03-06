<?php

    /* 
     * 
     *  php 变量
     *  
     *  */
//    echo "Hello World";
   
   /* 变量使用 */
//    $x = 5;
//    $y = 6;
//    $z = $x + $y;
//    echo $z;
   /* php变量规则 */
   //变量以 $ 符号开头，其后是变量的名称
   //变量名称必须以字母或下划线开头
   //变量名称不能以数字开头
   //变量名称只能包含字母数字字符和下划线（A-z、0-9 以及 _）
   //变量名称对大小写敏感（$y 与 $Y 是两个不同的变量）
   /* 变量会在首次为其赋值时被创建 */
   
   
   
   /* php变量的作用域 */
//     $x = 5;
//     function text() {
//         $y = 10;
//         echo "<p>测试函数内部的变量<p>";
//         echo "变量x是:" + $x;
//         echo "<br>";
//         echo "变量x是:$x";
//         echo "<br>";
//         echo "变量y是:" + $y;
//         echo "<br>";
//         echo "变量y是:$y";
//     }
    /* 注意:php变量可以直接写到字符串等常量中不需要连接符号 */
//     text();
    
    
    /* global 关键字 用于在函数内访问函数外作用域的变量 */
//     $x = 5;
//     $y = 10;
    
//     function myTest() {
//         global $x, $y;
//         $y = $x + $y;
//     }
    
//     myTest();
//     echo $x;
//     echo "<br>";
//     echo $y;
    /* 注意:global关键字不仅可以引用父域的变量,也可以改变父域的变量 */
    
    /* $GLOBALS[index]的数组中储存了所有的全局变量 */
    //这个数组在函数内也可以访问
    //并能够用于直接更新全局变量
//     $x = 5;
//     $y = 10;
    
//     function myText() {
//         $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
//     }
    
//     myText();
    
//     echo $x;
//     echo "<br>";
//     echo $y;
    /* $GLOBALS 相当于 global的底层功能,类似于一层封装 */
    
    
    /* static 关键字  不删除某个局部变量*/
    //通常，当函数完成/执行后，会删除所有变量
//     function myText() {
//         static $x = 0;
//         echo $x;
//         $x++;
//     }
    
//     function text() {
//         global $x;
//         echo $x;
//     }
    
//     myText();//0
//     myText();//1
//     myText();//2
//     text();
    //每当函数被调用时，这个变量所存储的信息都是函数最后一次被调用时所包含的信息
    //该变量仍然是函数的局部变量
    /* 只改变该变量的生存周期并不改变变量的作用域 */
    
    
    
    
    
    
    
    
    
    
    /* 
     * 
     *  php echo和print语句
     *  
     *  */
     

    /* 两种基本的输出方法：echo 和 print */
    //echo - 能够输出一个以上的字符串
    //print - 只能输出一个字符串，并始终返回 1
    









    /* 
     * 
     *  php 数据类型
     *  
     *  */
     
    /* 字符串、整数、浮点数、逻辑、数组、对象、NULL */
    
    
    /* PHP 字符串 */
    //字符串是字符序列
    //字符串可以是引号内的任何文本
    
//     $x = "Hello World!";
//     echo $x;
//     echo "<br>";
//     $y = 'Hello World!';
//     if($x == $y) {
//         echo "success";
//     }



    /* php 整数 */
    //整数必须有至少一个数字（0-9）
    //整数不能包含逗号或空格
    //整数不能有小数点
    //整数正负均可
    //可以用三种格式规定整数：十进制、十六进制（前缀是 0x）或八进制（前缀是 0）
    
//     $x = 50;
//     var_dump($x);//int(50)
//     echo "<br>";
//     $x = -50;
//     var_dump($x);//int(-50) 
//     echo "<br>";
//     $x = 0x8c;
//     var_dump($x);//int(140) 
//     echo "<br>";
//     $x = 047;
//     var_dump($x);//int(39) 
//     echo "<br>";
//     $y = "success";
//     var_dump($y);//string(7) "success" 
//     echo "<br>";
//     $z = true;
//     var_dump($z);//bool(true) 
//     echo "<br>";
//     $e = ["a", "b", "c", "d"];
//     var_dump($e);//array(4) { [0]=> string(1) "a" [1]=> string(1) "b" [2]=> string(1) "c" [3]=> string(1) "d" }
    /* var_dump可以判断数据的类型以及值的结构 */
    
    
    
    /* php 浮点数 */
    //浮点数是有小数点或指数形式的数字
    
//     $x = 10.365;
//     var_dump($x);//float(10.365) 
//     echo "<br>";
//     $y = 1.4e3;
//     var_dump($y);//float(1400) 
//     echo "<br>";
//     $z = 8E-5;
//     var_dump($z);//float(8.0E-5)
    
    
    
    /* php 逻辑 */
    //逻辑是 true 或 false
//     $x = false;
//     var_dump($x);//bool(false) 
//     echo "<br>";
//     $y = true;
//     var_dump($y);//bool(true) 
    



    /* php 数组 */
    //数组在一个变量中存储多个值
    
//     $cars = array("a", "b", "c", "a");
//     var_dump($cars);//array(4) { [0]=> string(1) "a" [1]=> string(1) "b" [2]=> string(1) "c" [3]=> string(1) "a" }



    /* php 对象 */
    //对象是存储数据和有关如何处理数据的信息的数据类型
    /* 必须明确地声明对象 */
    /* 必须声明对象的类     类是包含属性和方法的结构 */
    /* 然后我们在对象类中定义数据类型，然后在该类的实例中使用此数据类型 */
    
//     class Car
//     {
//         var $color;
//         function Car($color="green") {
//             $this->color = $color;
//         }
//         function what_color() {
//             return $this->color;
//         }
//     }
    
//     function print_vars($obj) {
//         foreach (get_object_vars($obj) as $prop => $val) {
//             echo "\t $prop = $val \n";
//         }
//     }
    
//     $color_white = new Car;//实例化一个类
//     $color_white->Car('white');//利用->来引用类里面的方法
//     print_vars($color_white);//color = white 
    
//     echo "<br>";
    
//     $color_null = new Car;
//     $color_null->Car(null);
//     print_vars($color_null);//color = green
    
    /* 注意:class以及内部的函数名称！！！！ */
    
    
    
    /* php NULL 值 */
    //特殊的 NULL 值表示变量无值
    //NULL 是数据类型 NULL 唯一可能的值
    //NULL 值标示变量是否为空
    //也用于区分空字符串与空值数据库
    //可以通过把值设置为 NULL，将变量清空
    
//     $x = "Hello World！";
//     var_dump($x);//string(14) "Hello World！" 
//     echo "<br>";
//     $x = null;
//     var_dump($x);//NULL 
//     echo "<br>";
//     var_dump($y);//NULL
    










    /* 
     * 
     *  PHP 字符串函数
     *  
     *  */
     


    /* PHP strlen()函数 */
    //strlen() 函数返回字符串的长度，以字符计数
    
//     echo strlen("Hello World!");//12
    
//     echo strlen(['a', 'b', 'c']);//报错
    
    //strlen() 常用于循环和其他函数，在确定字符串何时结束很重要时
    //在循环中，需要在字符串的最后一个字符之后停止循环
    



    /* PHP strpos()函数 */
    //strpos() 函数用于检索字符串内指定的字符或文本
    
    //如果找到匹配，则会返回首个匹配的字符位置
    //如果未找到匹配，则将返回 FALSE
//     echo strpos("Hello World!", "world");//null
//     echo strpos("Hello World!", "o");//4
    /* 注意:从零开始 */
    









    /* 
     * 
     *  PHP 常量
     *  
     *  */
     //常量是单个值的标识符（名称）
     /* 在脚本中无法改变该值 */
     //有效的常量名以字符或下划线开头（常量名称前面没有 $ 符号）
     /* 与变量不同，常量贯穿整个脚本是自动全局的 */
     
    
    /* 设置 PHP 常量 */
    //首个参数定义常量的名称
    //第二个参数定义常量的值
    //可选的第三个参数规定常量名是否对大小写敏感,默认是 false
    
//     define("test", "Hello test!", true);
//     echo Test;//Hello test!
//     echo "<br>";
//     echo test;//Hello test!
//     echo "<br>";
//     define("text", "Hello text!", false);
//     echo Text;//Text
//     echo "<br>";
//     echo text;//Hello text!
//     echo "<br>";










    /* 
     * 
     *  PHP 运算符
     *  
     *  */
     
    /* PHP 运算符 */
    // +  : $x + $y : $x 与 $y 求和
    // -  : $x - $y : $x 与 $y 的差
    // *  : $x * $y : $x 与 $y 的积
    // /  : $x / $y : $x 与 $y 的商
    // %  : $x % %y : $x 除 $y 的余
    
//     $x = 10;
//     $y = 6;
//     echo ($x + $y);//16
//     echo "<br>";
//     var_dump($x + $y);//int(16)
//     echo "<br>";
//     echo ($x - $y);//4
//     echo "<br>";
//     var_dump($x - $y);//int(4)
//     echo "<br>";
//     echo ($x * $y);//60
//     echo "<br>";
//     var_dump($x * $y);//int(60)
//     echo "<br>";
//     echo ($x / $y);//1.6666666666667
//     echo "<br>";
//     var_dump($x / $y);//float(1.6666666666667) 
//     echo "<br>";
//     echo ($x % $y);//4
//     echo "<br>";
//     var_dump($x % $y);//int(4)



    /* PHP 赋值运算符 */
    //PHP 赋值运算符用于向变量写值
    //PHP 中基础的赋值运算符是 "="
    /* 这意味着右侧赋值表达式会为左侧运算数设置值 */
    
    //x = y : x = y : 右侧表达式为左侧运算数设置值
    //x += y : x = x + y : 加
    //x -= y : x = x - y : 减
    //x *= y : x = x * y : 乘
    //x /= y : x = x / y : 除
    //x %= y : x = x % y : 去模
    
//     $x = 10;
//     echo $x;//10
//     echo "<br>";
    
//     $y = 20;
//     $y += 10;
//     echo $y;//30
//     echo "<br>";
    
//     $z = 50;
//     $z -= 25;
//     echo $z;//25
//     echo "<br>";
    
//     $i = 5;
//     $i *= 6;
//     echo $i;//30
//     echo "<br>";
    
//     $j = 10;
//     $j /= 5;
//     echo $j;//2
//     echo "<br>";
    
//     $k = 15;
//     $k %= 4;
//     echo $k;//3



    /* PHP 字符串运算符 */
    //.  : 串接 : $txt1 = "Hello" $txt2 = $txt1. "World" : $txt2 包含 "Hello world"
    //.=  : 串接赋值 : $txt1 = "Hello" $txt1.=" .world!" : $txt1 包含 "Hello world!"
    
//     $a = "Hello";
//     $b = $a . " world!";
//     echo $b;//Hello world!
//     echo "<br>";
    
//     $x = "Hello";
//     $x .= " World!";
//     echo $x;//Hello World!



    /* PHP 递增/递减运算符 */
    //++$x : 前递增 : $x 加一递增，然后返回 $x
    //$x++ : 后递增 : 返回 $x，然后 $x 加一递增
    //--$x : 前递减 : $x 减一递减，然后返回 $x
    //$x-- : 后递减 : 返回 $x，然后 $x 减一递减
    
//     $x = 10;
//     echo ++$x;//11
//     echo "<br>";
    
//     $y = 10;
//     echo $y++;//10
//     echo "<br>";
    
//     $z = 10;
//     echo --$z;//9
//     echo "<br>";
    
//     $i = 10;//10
//     echo $i--;



    /* PHP 比较运算符 */
    //PHP 比较运算符用于比较两个值（数字或字符串）
    
    //== : 等于 : $x == $y : 如果 $x 等于 $y，则返回 true
    //=== : 全等(完全相等) : $x === $y : 如果 $x 等于 $y，且它们类型相同，则返回 true
    //!= : 不等于 : $x != $y : 如果 $x 不等于 $y，则返回 true
    //<> : 不等于 : $x <> $y : 如果 $x 不等于 $y，则返回 true
    //!== : 不全等(完全不同) : $x !=== $y : 如果 $x 不等于 $y，且它们类型不相同，则返回 true
    //> : 大于 : $x > $y : 如果 $x 大于 $y，则返回 true
    //< : 小于 : $x < $y : 如果 $x 小于 $y，则返回 true
    //>= : 大于或等于 : $x >= $y : 如果 $x 大于或者等于 $y，则返回 true
    //<= : 小于等于 : $x <= $y : 如果 $x 小于或者等于 $y，则返回 true
    
//     $x = 100;
//     $y = "100";
    
//     var_dump($x == $y);//bool(true) 
//     echo "<br>";
//     var_dump($x === $y);//bool(false) 
//     echo "<br>";
//     var_dump($x != $y);//bool(false) 
//     echo "<br>";
//     var_dump($x !== $y);//bool(true) 
//     echo "<br>";
//     var_dump($x > $y);//bool(false) 
//     echo "<br>";
//     var_dump($x >= $y);//bool(true) 
//     echo "<br>";
//     var_dump($x <= $y);//bool(true) 
//     echo "<br>";
//     echo $v;//
//     echo "<br>";
//     var_dump($v);// NULL



    /* PHP 逻辑运算符 */
    /* and : 与 : $x and $y : 如果 $x 和 $y 都为 true，则返回 true */
    /* or : 或 : $x or $y : 如果 $x 和 $y 至少有一个为 true，则返回 true */
    /* xor : 异或 : $x xor $y : 如果 $x 和 $y 有且仅有一个为 true，则返回 true */
    /* && : 与 : $x && $y : 如果 $x 和 $y 都为 true，则返回 true */
    /* || : 或 : $x || $y : 如果 $x 和 $y 至少有一个为 true，则返回 true */
    /* ! : 非 : !$x : 如果 $x 不为 true，则返回 true */
    



    /* PHP 数组运算符 */
    /* + : 联合 : $x + $y : $x 和 $y 的联合(但不覆盖重复的键) */
    /* == : 相等 : $x == $y : 如果 $x 和 $y 拥有相同的键/值对，则返回 true */
    /* === : 全等 : $x === $y : 如果 $x 和 $y 拥有相同的键/值对，且顺序相同类型相同，则返回 true */
    /* != : 不相等 : $x != $y : 如果 $x 不等于 $y，则返回 true */
    /* <> : 不相等 : $x <> $y : 如果 $x 不等于 $y，则返回 true */
    /* !== : 不全等 : $x !== $y : 如果 $x 与 $y 完全不同，则返回 true */
    
//     $x = array("a" => 'red', "b" => 'green');
//     $y = array("c" => 'blue', "d" => 'yellow');
//     $z = $x + $y;
//     var_dump($z);//array(4) { ["a"]=> string(3) "red" ["b"]=> string(5) "green" ["c"]=> string(4) "blue" ["d"]=> string(6) "yellow" } 
//     echo "<br>";
//     var_dump($x == $y);//bool(false) 
//     echo "<br>";
//     var_dump($x === $y);//bool(false) 
//     echo "<br>";
//     var_dump($x != $y);//bool(true) 
//     echo "<br>";
//     var_dump($x <> $y);//bool(true) 
//     echo "<br>";
//     var_dump($x !== $y);//bool(true) 











    /* 
     * 
     *  PHP if...else...elseif语句
     *  
     *  */
?>
