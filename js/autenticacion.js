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
	$('.registro').on('submit',function(e){
		e.preventDefault();

			var email = $('.registro .email ').val();
            console.log(email);
            var password = $('.registro .password ').val();
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
				.then(function(user){
					alert ("Se ha registrado correctamente");
				})
				.catch(function(error){
					alert ("No eres bienvenido");
				});
			}
	    }
	    );
});           