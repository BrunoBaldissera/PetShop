var form = new Vue({
	el: '#register-form',
	data: {
		name : "",
		login: "",
		email : "",
 		pass : ""
	},

	methods: {
		cadastra: function(){
			console.log("name: " + this.name);
			console.log("email: " + this.email);
			console.log("password: " + this.pass);
			console.log("login: " + this.login);

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
			  	});
			}
	}
});
