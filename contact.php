<?php include 'components/header.php'; ?>
  <?php include 'components/menu.php'; ?>
  <header>
    <h2 class="slide-down-in">CONTACT</h2>
  </header>
  <div class="container about">
    <form id="contactForm" method="post" action="insert.php" class="slide-down-in">
      <fieldset>
        <!-- <?php
          $fields = array('First Name' => 'first', 'Middle Name' => 'middle', 'Email' => 'email');
          foreach($fields as $key => $value) {
            echo '<label class="name-input">';
            echo '<div class="title">';
            echo '<p class="hide-labels">' . $key . '</p>';
            echo '</div>';
            echo '<input type="text" name="' . $value . '" placeholder="' . $key . '">';
          }
        ?> -->
        <label class="name-input">
          <div class="title">
            <p class="hide-labels">First Name</p>
          </div>
          <input type="text" name="first" placeholder="First Name">
        </label>
        <label class="name-input">
          <div div class="title">
            <p class="hide-labels">Middle Name</p>
          </div>
          <input type="text" name="last" placeholder="Last Name">
        </label>
        <label class="name-input">
          <div div class="title">
            <p class="hide-labels">Email</p>
          </div>
          <input type="text" name="email" placeholder="Email">
        </label>
        </fieldset>
        <fieldset>
          <label class="name-input">
            <div class="title">
            <p class="hide-labels">Message</p>
            </div>
            <textarea rows="5" cols="20" name="message" placeholder="Message"></textarea>
          </label>
        </fieldset>
      <fieldset>
        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </fieldset>
    </form>

		<div class="push"></div>
  </div>
  <?php include 'components/footer.php'; ?>
</body>
