var form = new Vue({
	el: '#login-form',
	data: {
		
		login: "",
 		pass : ""
	},

	methods: {
		login: function(){

			console.log("password: " + this.pass);
			console.log("login: " + this.login);

			axios.get('http://webcode.me')
                
				.then(function (response) {
                    console.log(response);
                    
                    let result = pass.localeCompare(db_pass); //compara senha igual a do banco
                    console.log("senha compare deu " + result);
			  	})
			  	.catch(function (error) {
			    	console.log(error);
				  });
				  
				  var cursor = db.clients.find({login: this.login});
					cursor.forEach(function(clients){
					//access all the attributes of the document here
					var id = customer._id;
					})
			}
		}
	});
