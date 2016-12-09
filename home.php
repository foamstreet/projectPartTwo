<?php include 'components/header.php'; ?>
	<div class="container">
		<header>
			<h1><span class="slide-down-in">STACY</span> <span class="slide-up-in">MACKIN</span></h1>
		</header>

		<nav class="pull-left home">
			<ul>
				<li id="about" class="home pop-in-left"><a href="about.php">ABOUT</a></li>
				<li id="work" class="home pop-in-right "><a href="work.php">WORK</a></li>
				<li id="contact" class="home pop-in-left"><a href="contact.php">CONTACT</a></li>
			</ul>
		</nav>

    <?php
      $videos = array('about','work', 'contact');
      foreach($videos as $v) {
        echo '<video id="' . $v . 'Video" loop muted>';
        echo '<source src="videos/' . $v . '.mp4" type="video/mp4">';
        echo '</video>';
      }
    ?>
    <div class="push"></div>
  </div>
  <?php include 'components/footer.php'; ?>
</body>
