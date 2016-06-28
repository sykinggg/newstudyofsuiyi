		//聊天	
		var io = require("socket.io").listen(server); 
		var socket = io.connect('http://localhost:2000');
		socket.on('news', function (data) {
			console.log(data);
			socket.emit('my other event', { my: 'data' });
		});
		// for better performance - to avoid searching in DOM 为更好的性能-避免搜索DOM
		  

		// my color assigned by the server  我的颜色分配给服务器
	    var myColor = false;  
	    // my name sent to the server  我的名字发送到服务器
	    var myName = false;  
	    var connection = null;  
	    var currentToUser = null;  
	   	// 事件引用定义
	   	function chatToSb(username) {  
		    currentToUser = username.text;
		    $("#input1").text(username.text);
		    console.log($("#input1").text());
		}  
		  
		function disConnect(){  
		    connection.disconnect();  
		    //alert("断开连接");  
		      
		}  
		  
		function beforeDisConnect() {  
		    return "确认离开";  
		}  
	    $(function(){
	    	// my color assigned by the server  我的颜色分配给服务器
		    var myColor = false;  
		    // my name sent to the server  我的名字发送到服务器
		    var myName = false;  
		    var connection = null;  
		    var currentToUser = null;  
		    connect();  
		    window.onbeforeunload = beforeDisConnect;//监听浏览器关闭前的事件  
		    window.onunload = disConnect;//监听浏览器关闭时  
		    /** 
		     * Send mesage when user presses Enter key 用户按下回车键时发消息
		     */ 
		    $('#input').keydown(function (e) {
		        if (e.keyCode === 13) {  
		            var msg = $(this).val();  
		            if (!msg) {  
		                return;  
		            }  
		            if (!myName) {  
		                myName = msg;//定义名字  
		                $('#status').text(myName);  
		                $('#input').val("");  
		                  
		                if (connection) {  
		                    connection.json.send({ logicId: "login", username: myName });  
		                }  
		                return;  
		            }
		            if(!$("#input1").text()){
		            	return;
		            }
		            var time = new Date();  
		            var tmpTime = time.getFullYear() + "-" + ((time.getMonth() < 9 ? "0" : "") + (time.getMonth() + 1)) + "-" + ((time.getDate() < 10 ? "0" : "") + time.getDate()) + " "  
		                    + ((time.getHours() < 10 ? "0" : "") + time.getHours()) + ":" + ((time.getMinutes() < 10 ? "0" : "") + time.getMinutes()) + ":" + ((time.getSeconds() < 10 ? "0" : "") + time.getSeconds());  
		            // send the message as an ordinary text  将邮件发送为普通文本
		            msg = { "@class": "test.EntityIn", logicId: "chat", username: myName, msg: $('#input').val(),  
		            to:$("#input1").text(),time:tmpTime};  
		              
		            //alert(typeof(object));  
		            connection.json.send(msg);  
		            $(this).val('');  
		            // disable the input field to make the user wait until server  禁用输入字段，让用户等待服务器
		            // sends back response  发送回响应
		  
		        }  
		    });  
		  
		  
		  
		    /** 
		     * Add message to the chat window 向聊天窗口添加消息
		     */  
		    // function addMessage(author, message, dt, to) {  
		    // 	console.log(author,message,dt);
		    //     $("#content").prepend('<p><span>' + author + '</span> @ '+dt+ ': ' + message + '</p>');  
		    // }

		    function addMessage(author, message, dt) {  
		    	console.log(author,message,dt);
		        $("#content").prepend('<p><span>' + author + '</span> @ '+dt+ ': ' + message + '</p>');  
		    }  
		      
		function connect() {  
		    // open connection  开连接
		    connection = io.connect('http://127.0.0.1:1337', { 'reconnect': false });  
		    connection.on('connect', function (data) {  
		        // first we want users to enter their names  首先，我们希望用户输入他们的名字
		        $('#input').removeAttr('disabled');  
		        $('#status').text('登录:');  
		        connection.send(1);  
		    });  
		  
		    connection.on("error", function (error) {  
		        // just in there were some problems with conenction...  只是在有连接的一些问题…
		        $("#content").html($('<p>', {  
		            text: 'Sorry, but there\'s some problem with your '  
		                + 'connection or the server is down.'  
		        }));  
		    });  
		  
		    // most important part - incoming messages  最重要的部分-传入消息
		    connection.on("message", function (message) {
		        var logicId = message.logicId;  
		        if (logicId == 'conn_success') {//连接成功  
		            var users = message.users;
		            for (var i = 0; i < users.length; i++) {
		                $("#list").append('<a href="#" onclick="chatToSb(this)">'+users[i]+'</a></br>');
		            }  
		        } else if (logicId == "chat") {  
		            addMessage(message.from,message.msg,message.time);  
		        }else if(logicId == "history"){  
		            var historyMsgs = message.historyMsgs;  
		            for(var i = 0; i < historyMsgs.length; i++){  
		                addMessage(historyMsgs[i].from,historyMsgs[i].msg,historyMsgs[i].time,historyMsgs[i].to);  
		            }  
		        }  
		  
		    });  
		} 
	    })
// module.express = function(app){
// 	app.get('/', function(req,res){
// 		res.render('test', {issuccess:"success"})
// 	});
// 	app.get('/interface', function(req,res){});
// 	app.post('/interface', function(req,res){});
// }
