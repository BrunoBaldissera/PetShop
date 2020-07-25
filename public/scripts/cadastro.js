var form = new Vue({
	el: '#register-form',
	data: {
		name : "",
		login: "",
		email : "",
 		pass : "",
 		invalid : 0
	},

	methods: {
		cadastra: function(){
			if(this.null == null) this.invalid = 1;
			if(this.login == null) this.invalid = 1;
			if(this.email == null) this.invalid = 1;
			if(this.pass == null) this.invalid = 1;

			//ENTENDER O :client_id
			axios.get('/api/clients:client_id')
			  	.then(function(response){
			    console.log(response.data); 
			    console.log(response.status);
			    if(response.data != null) this.invalid = 1;
				}
			);

			if(this.invalid == 0){
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
	}
});
