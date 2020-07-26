var log = new Vue({
	el: '#login-form',
	data: {
		login_c: "",
		pass_c : "",
		name_cli : "",
		dis_btn_c : 0,
		pw_inc: false,
		log_ok: false,
		showAlert_c: false
	},

	methods: {
		login: function(){
			var self = this;
			axios.post('/api/clients/login', {
					login: self.login_c,	
					password: self.pass_c
				})
			  	.then( (response) => {
				    console.log(response.data) ;
				    console.log(response.status);
				    console.log("login (get): " + self.login_c);
					console.log("pass (get): " + self.pass_c);

				    if (response.data == null){
						console.log(response.data.login);

				    	console.log(self.pass_c)
				    	if (response.val == true){
				    		console.log("login aceito!");
				    		self.pw_inc = false;
				    		self.log_ok = true;
				    		self.name_cli = response.data.nome;
				    		self.dis_btn_c = 1;
				    	}
				    	else
				    		self.pw_inc = true;	
				    }
				    else {
				    	self.showAlert_c = true;
				    	console.log("login incorreto");
				    	console.log("showAlert (get): " + self.showAlert_c.toString());
				    }
				}) .catch( (err) => console.log(err) );
		}
	}
});
