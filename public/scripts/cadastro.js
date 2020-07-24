new Vue({
	
	el: '#app',
	data: {
 		name : "",
 		email : "",
 		pass : "",
 		img_path : ""
	},

	methods: {
		cadastra: function(){
			console.log(name);
			console.log(email);
			console.log(pass);
			console.log(img_path);
		}
	}
});	
