var cad = new Vue({
	el: '#register-form',
	data: {
		name : "",
		login: "",
		email : "",
		pass : "",
		dis_btn : 0,
		showAlert: false
	},

	methods: {
		cadastra: function(){
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

					console.log(Object.keys(response.data.data).length);

				    if (Object.keys(response.data.data).length == 0){
				    	if (self.email != "" && self.name != ""){
				    		console.log("login vai ser feito")
				    		axios.post('/api/clients', {
						    	nome: self.name,
								email: self.email,
								login: self.login,
						    	pass: self.pass
							})
							.then(function (response) {
						    	console.log(response);
						    	self.dis_btn = 1;
						  	})
						  	.catch(function (error) {
						    	console.log(error);
						  	})
				    	}
				    }
				    else {
				    	self.showAlert = true
				    	console.log("login já existe, post: " + post.toString())
				    	console.log("showAlert (get): " + self.showAlert.toString())
				    }
				}) .catch( (err) => console.log(err) );
		}
	}
});
