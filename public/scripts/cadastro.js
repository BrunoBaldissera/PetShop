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
			var post = true;
			if(this.null === "") post = false;
			if(this.login === "") post = false;
			if(this.email === "") post = false;
			if(this.pass === "") post = false;

			//ENTENDER O :client
			axios.get('/api/clients/search')
			  	.then(function(response){
				    console.log(response.data); 
				    console.log(response.status);
				    if (response.data.length == 0){
				    	post = false;
				    	console.log("usuario ja existe..");
				    }
				}
			);

			if(post = true){
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
