<?php include 'components/header.php'; ?>
	<div class="container">
    <?php include 'components/menu.php'; ?>
    <div class="clear"></div>

		<header>
			<h2 class="slide-down-in">WORK</h2>
		</header>

		<div class="work-block">
			<a href="http://www.mackinengineering.com"><img class="pull-left slide-down-in" src="images/MEC.png"></a>
      <div class="slide-down-in">
        <h3>Mackin Engineering Company Website</h3>
				<p>Worked as the lead developer on the redesign of the Mackin Engineering Company website. I utilized many web technologies in the creation of the site. These included the following:</p>
				<ul class="pull-left">
          <?php
            $langs = array('HTML', 'CSS', 'JavaScript', 'jQuery', 'AngularJS');
            foreach($langs as $l) {
              echo '<li>' . $l . '</li>';
            }
          ?>
				</ul>
				<ul class="pull-left">
          <?php
            $langs = array('Yeoman', 'Node', 'Express', 'MongoDB');
            foreach($langs as $l) {
              echo '<li>' . $l . '</li>';
            }
          ?>
				</ul>
      </div>
		</div>
		<div class="clear"></div>
	</div>

	<div class="push"></div>
  <?php include 'components/footer.php'; ?>
</body>
