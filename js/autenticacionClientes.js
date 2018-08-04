jQuery(document).ready(function ($) {
	$('.login').on('submit',function(e){
		e.preventDefault();

			var email = $('.login .email ').val();
            console.log(email);
            var password = $('.login .password ').val();
			console.log(password);
			if (!email) {
				alert('Debe ingresar un correo.');
			}

			else if (!password){
				alert('Debe ingresar una contraseña.');
			}

			else{
				firebase
				.auth()
				.signInWithEmailAndPassword(email,password)
				.then(function(){
					alert ("Bienvenido");
				})
				.catch(function(error){
					alert ("No eres bienvenido");
				});
			}
	    }
	    );
});
jQuery(document).ready(function ($) {
	$('#register-form form').on('submit',function(e){
		e.preventDefault();

			var email = $('#register-form form #email ').val();
            console.log(email);
            var password = $('#register-form form #password ').val();
            console.log(password);
			
			if (!email) {
				alert('Debe ingresar un correo.');
			}

			else if (!password){
				alert ('Debe ingresar una contraseña.');
			}

			else{
				firebase
				.auth()
				.createUserWithEmailAndPassword(email,password)
				.then(function(){
					var uid = firebase.auth().currentUser.uid;
					database.ref('clientes/' + uid).set({
					    email: email,
					    name: $('#register-form form #name ').val(),
					    phone: $('#register-form form #phone ').val(),
					    terms: $('#register-form form #terms ').val()
					});
					alert ("Se ha registrado correctamente");
				})
				.catch(function(error){
					alert ("No eres bienvenido");
				});
			}
	    }
	    );
});           