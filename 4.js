4.   <?php 
      $string = ['P','R','O','G','R','A','M','M','E','R'];
      for ($i=0; $i < count($string); $i++) { 
	    for ($j=0; $j < count($string); $j++) { 
		if ($i == $j) {
			echo $string[$i];
		}else{
			echo "*";
	     }
	}
	echo "\n";
      }
      ?>
