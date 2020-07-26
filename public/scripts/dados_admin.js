var perfil = new Vue({
	el: '#perfil-admin',
    
    data: {
        nome_a: "",
        id_a: "",
        telefone_a: "",
        email_a: ""
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
