<!-- CONTACT -->
<?php 

	/*
	********************************************************************************************
	CONFIGURATION
	********************************************************************************************
*/
// destinataire est votre adresse mail. Pour envoyer à plusieurs à la fois, séparez-les par une virgule
	$destinataire = 'arnoutti@gmail.com';


// Messages de confirmation du mail
	$message_envoye = "Votre message nous est bien parvenu !";
	$message_non_envoye = "L'envoi du mail a échoué, veuillez réessayer SVP.";

// Messages d'erreur du formulaire
	$message_erreur_formulaire = "Vous devez d'abord <a href=\"contact.html\">envoyer le formulaire</a>.";
	$message_formulaire_invalide = "Vérifiez que tous les champs soient bien remplis et que l'email soit sans erreur.";
	$erreur = "";

/*
	********************************************************************************************
	FIN DE LA CONFIGURATION
	********************************************************************************************
*/


	try{

		// S'il y des données de postées
		if ($_SERVER['REQUEST_METHOD']=='POST') 
		{

			if (isset($_POST['submit'])) 
			{

				if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message']))
				{
					$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : NULL;
					$email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : NULL;
					$message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : NULL;
					//Si la variable $_POST['name'] existe et n'est pas vide, alors $name = $_POST['name']  sinon elle vaut NULL 


  					// Variables concernant l'email

  					$sujet = 'Titre du message'; // Titre de l'email
  					$contenu = '<html><head><title>Titre du message</title></head><body>';
  					$contenu .= '<p>Bonjour, vous avez reçu un message à partir de votre site web.</p>';
  					$contenu .= '<p><strong>Nom</strong>: '.$name.'</p>';
  					$contenu .= '<p><strong>Email</strong>: '.$email.'</p>';
  					$contenu .= '<p><strong>Message</strong>: '.$message.'</p>';
  					$contenu .= '</body></html>'; // Contenu du message de l'email (en XHTML)

  					// Pour envoyer un email HTML, l'en-tête Content-type doit être défini
  					$headers = 'MIME-Version: 1.0'."\r\n";
  					$headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";

  					// Envoyer l'email
  					mail($destinataire, $sujet, $contenu, $headers); // Fonction principale qui envoi l'email
  					$erreur = "Votre message nous est bien parvenu !";

  				}
  				else
  				{
  					$erreur = "Vérifiez que tous les champs soient bien remplis et que l'email soit sans erreur.";
  					;
  				}
  			}
  			else
  			{
  				$erreur =  "Veuillez soumettre le formulaire.";

  			}
  		}
  	}
  	catch(Exception $e) 
	{ // S'il y a eu une erreur, alors...
	echo 'Erreur : ' . $e->getMessage();
}

?>

<section class="contact_s" id="contact">
	<div class="container-fluid">
		<div class="row">
			<div class="contact-title col-12">
				<h2>CONTACT</h2>
			</div>
		</div>
	</div>
	<div class="contact form container">
		<div class="row">
			<div class="contact form-header col-12">
				<h3>LIEU DE TRAVAIL</h3>
			</div>
		</div>
		<div class="row">
			<div class="contact picture col-12 col-md-4">
				<img src="public//image/picture-map.jpg">
			</div>
			<div class="contact input-form col-md-8">
				<div class="row">
					<div class="contact adress col-12 ">
						<i class="fa fa-map-marker fa-fw"></i>Lille, FRANCE<br>
						<i class="fa fa-envelope fa-fw"></i>arnoutti@gmail.com
					</div>
					<div class="contact formulaire col-12">
						<div id="form-main">
							<form class="form" id="form1" action="index.php#valid_form" method="POST">

								<p class="name">
									<input name="name" type="text" class="feedback-input" placeholder="Nom" id="name" name="name" />
								</p>

								<p class="email">
									<input name="email" type="email" class="feedback-input" id="email" placeholder="Email" name="email" />
								</p>

								<p class="text">
									<textarea class="feedback-input" id="message" placeholder="Message" name="message" ></textarea>
								</p>
								<div class="submit">
									<input type="submit" value="ENVOYER" id="button-blue" name="submit"/>
								</div>
							</form>
							<div id="valid_form" class="valid_form">
								<p><?php echo($erreur); ?></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>



