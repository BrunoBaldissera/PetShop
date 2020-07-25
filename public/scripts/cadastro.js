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
		}
	}
});

while (1) {
	form.cadastra();
}
