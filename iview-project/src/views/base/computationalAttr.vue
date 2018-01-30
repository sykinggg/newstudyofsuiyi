<template>
    <div>
        <Card style="margin-top: 15px;">
            <p slot="title">计算属性和观察者</p>
            <ul>
                <li>{{message.split('').reverse().join('')}}</li>
                <li>{{reversedMessage()}}</li>
                <li>{{reversedMessage}}</li>
                <li>{{reversedMessage1('aaa')}}</li>
                <li>{{now()}}</li>
            </ul>
            <input type="text" v-model="question">
            <span>{{answer}}</span>
        </Card>
    </div>
</template>

<script>
	export default {
		name: 'computational-attr',
		data() {
			return {
				message: 'a b c d e f',
				reversedMessage: function () {
					return this.message.split('').reverse().join('');
				},
				reversedMessage1: function (name) {
					return name;
				},
				now: function () {
					return Date.now();
				},
				question: '',
				answer: 'I cannot give you an answer until you ask a question!'
			};
		},
		computed: {
			fullName: function () {
				return this.message + this.messageClasses();
			}
		},
		watch: {
			// 如果 `question` 发生改变，这个函数就会运行
			question: function (newQuestion, oldQuestion) {
				this.answer = 'Waiting for you to stop typing...';
				this.getAnswer();
			}
		},
		methods: {
			// `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
			// 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
			// AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
			// `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
			// 请参考：https://lodash.com/docs#debounce
			getAnswer: setTimeout(
				function () {
					if(!this.question) {
						this.question = '';
                    }
					if (this.question.indexOf('?') === -1) {
						this.answer = 'Questions usually contain a question mark. ;-)';
						return;
					}
					this.answer = 'Thinking...';
					var vm = this;
					axios.get('https://yesno.wtf/api')
					.then(function (response) {
						vm.answer = _.capitalize(response.data.answer);
					})
					.catch(function (error) {
						vm.answer = 'Error! Could not reach the API. ' + error;
					});
				},
				// 这是我们为判定用户停止输入等待的毫秒数
				500
            )
		}
	};
</script>

<style scoped>

</style>