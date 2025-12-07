<?php
if(isset($_POST['nom'], $_POST['email'], $_POST['message'])) {

    // ✅ 1) Mets ton adresse mail ici
    $to = "chaiebnassim14@gmail.com";

    // ✅ 2) Sujet du mail
    $subject = "Nouvelle commande";

    // ✅ 3) Corps du message
    $message =
        "Nom : " . $_POST['nom'] . "\n" .
        "Email : " . $_POST['email'] . "\n\n" .
        "Message : \n" . $_POST['message'];

    // ✅ 4) Entête (optionnel mais conseillé)
    $headers = "From: no-reply@tonsite.com";

    // ✅ Envoi du mail
    mail($to, $subject, $message, $headers);

    echo "Message envoyé ✅";
}
?>
