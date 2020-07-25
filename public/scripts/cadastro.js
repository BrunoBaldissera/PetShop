var form = new Vue({
	el: '#register-form',
	data: {
		name : "",
		login: "",
		email : "",
		pass : "",
		invalid : 0,
		showAlert: false
	},

	methods: {
		cadastra: function(){
			var post = false;
			var self = this;

			//ENTENDER O :client
			axios.get('/api/clients/search', {
					login: self.login
				})
			  	.then( (response) => {
			  		console.log("login (get): " + self.login) 
				    console.log(response.data) 
				    console.log(response.status)
				    console.log("name (get): " + self.name) 
				    console.log("email (get): " + self.email) 
				    console.log(response.data.length)
				    console.log(arr.length)
				    if (response.data.length == 0){
				    	if (self.email != "" && self.name != ""){
				    		console.log("login vai ser feito")
				    		post = true;
				    	}
				    }
				    else {
				    	self.showAlert = true
				    	console.log("login já existe, post: " + post.toString())
				    	console.log("showAlert (get): " + self.showAlert.toString())
				    }
				});

			console.log("login: " + this.login);

			if(post == true){
				axios.post('/api/clients', {
			    	nome: this.name,
					email: this.email,
					login: this.login,
			    	pass: this.pass
				})
				.then(function (response) {
			    	console.log(response);
			  	})
			  	.catch(function (error) {
			    	console.log(error);
			  	})
			  	this.invalid = 1;
			}
		}
	}
});
