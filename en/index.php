<?php ob_start(); ?>

<?php $content = ob_get_clean(); ?>
 
<?php require('vues/tp_head.php'); ?>
<?php include('vues/tp_header.php'); ?>
<?php include('vues/tp_about.php'); ?>
<?php include('vues/tp_competences.php'); ?>
<?php include('vues/tp_technologies.php'); ?>
<?php include('vues/tp_contact.php'); ?>
<?php include('vues/tp_footer.php'); ?>


