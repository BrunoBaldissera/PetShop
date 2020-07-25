var perfil = new Vue({
	el: '#perfil-admin',
    
    data: {
        nome: "",
        telefone: "",
        email: ""
	},

	methods: {
		dados_admin: function(){

			console.log("nome: " + this.nome);
            console.log("telefone: " + this.telefone);
            console.log("email: " + this.email);

			axios.get('/admin', {
                params: {
                  ID: 12345
                }
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
