var cad = new Vue({
	el: '#register-form',
	data: {
		name : "",
		login: "",
		email : "",
		pass : "",

		endereco: "",
		telefone: "",

		dis_btn : 0,
		showAlert: false
	},

	methods: {
		cadastra: function(){
			var self = this;
			var client = {email: self.email, password: self.pass};
			//ENTENDER O :client
			axios.post('/', {
					client: client
				})
			  	.then( (response) => {
			  		console.log("login (get): " + self.login) 
				    console.log(response.data) 
				    console.log(response.status)
				    /*console.log("name (get): " + self.name) 
					console.log("email (get): " + self.email)

					console.log(response.data.length);

				    if (response.data.length == 0){
				    	if (self.email != "" && self.name != ""){
				    		console.log("cadastro vai ser feito")
				    		axios.post('/api/clients', {
						    	nome: self.name,
								email: self.email,
								login: self.login,
								password: self.pass,
								endereco: self.endereco,
								telefone: self.telefone,
								token: self.login+':'+self.password
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
				    	console.log("showAlert (get): " + self.showAlert.toString())
				    }*/
				}) .catch( (err) => console.log(err) );
		}
	}
});
