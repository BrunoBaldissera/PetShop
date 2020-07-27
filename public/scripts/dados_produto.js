var prod = new Vue({
	el: '#prods',
	data: {
		nome_prod: "bola",
		email_in: "",
		id_prod : "80",
		showOk: false,
		showErr: false,
		desc: ""
    },

    methods: {
    	add_to_cart: function(){
    		console.log("adicionando ao carrinho");
    		var self = this;
    		axios.post('/api/clients/add_product', {
    				email: self.email_in,
					product: self.id_prod
				})
			  	.then( (response) => {
			  		console.log(response.data.ok.toString());
			  		if (response.data.ok)
			  			self.showOk = true;
			  		else 
			  			self.showErr = true;
				}) .catch( (err) => console.log(err) );
		}
	}
});