<nav class="pull-left pop pop-in">;
  <ul>
    <?php
      $nav = array('Home', 'About', 'Work', 'Contact');
      foreach($nav as $n) {
        echo '<li id="#' . $n . '"><a href="' . $n . '.php">'. $n . '</a></li>';
      }
    ?>
  </ul>
</nav>
<div class="menu-btn">
  <?php
    for($i = 0; $i < 4; $i++) {
      echo '<div class="bar' . $i . '"></div>';
    }
  ?>
</div>
<div class="clear"></div>
