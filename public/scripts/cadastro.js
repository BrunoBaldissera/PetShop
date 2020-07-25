var form = new Vue({
	el: '#register-form',
	data: {
 		name : "",
 		email : "",
 		pass : ""
	},

	methods: {
		cadastra: function(){
			console.log("name: " + this.name);
			console.log("email: " + this.email);
			console.log("password: " + this.pass);

			axios.post('/api/clients', {
			    	nome: this.name,
			    	email: this.email,
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
