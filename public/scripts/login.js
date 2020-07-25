var log = new Vue({
	el: '#login-form',
	data: {
		login_c: "",
		pass_c : "",
		name_cli : "",
		dis_btn_c : 0,
		showAlert_c: false
	},

	methods: {
		login: function(){
			var self = this;
			axios.get('/api/clients/search', {
					login: self.login_c
				})
			  	.then( (response) => {
				    console.log(response.data) 
				    console.log(response.status)
				    console.log("login (get): " + self.login_c) 
					console.log("pass (get): " + self.pass_c)

					console.log("OBA " + Object.keys(response.data.data).length);

				    if (Object.keys(response.data.data).length != 0){
				    	console.log(Object.keys(response.data.data).length);
						console.log(response.data.data.login);	
						console.log(response.data.data.password);

				    	console.log(self.pass_c)
				    	if (self.pass_c == response.data.data[0].password){
				    		console.log("login aceito!")
				    		self.name_cli = response.data.data[0].name
				    		self.dis_btn_c = 1;
				    	}
				    }
				    else {
				    	self.showAlert_c = true
				    	console.log("login incorreto")
				    	console.log("showAlert (get): " + self.showAlert_c.toString())
				    }
				}) .catch( (err) => console.log(err) );
		}
	}
});
