<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<title>Cerato Boutique</title>
<meta name="keywords" content="">
<meta name="description" content="Far from predictable, Cerato is a boutique that inspires you while you're there, and leaves you feeling great about yourself long after you've left.  The designers we carry are fresh, unique and talented.  Located in the heart of Chicago's Southport Shopping District at 3451 N. Southport Ave., you can be sure to find something here that inspires you to be you!">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link rel="stylesheet" type="text/css" media="screen" href="cerato.css">

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>

<script type="text/javascript" src="http://cloud.github.com/downloads/malsup/cycle/jquery.cycle.lite.1.0.min.js"></script>

<script type="text/javascript">
$(function() {
    $('#slideshowmain').cycle();
    
    function onBefore() {
        $('#title').html(this.alt);
    }
});
</script>

</head>
<body>
<div id="container">
     <div id="main">

          <div id="header"><a href="http://ceratoboutique.com"><img class="headerimage" alt="Cerato Logo" src="images/Cerato_VectorLogo.png"></a>
          <div id="topmenu"><?php include("topmenu.inc"); ?></div>
          </div>
          
          <div id="sidebar">
                         <?php include("sidebarmenu.inc"); ?>
               <?php include("sidebarsub.inc"); ?>
          </div>

              <div id="bodycontent">
     <h1>cerato boutique</h1>
     
 
        <div id="slideshowmain" class="pics">
            <img src="images/1.jpg" width="350" height="233" alt="1"/>
            <img src="images/2.jpg" width="350" height="233" alt="2"/>
            <img src="images/slide1.jpg" width="350" height="233" alt="3"/>
            <img src="images/4.jpg" width="350" height="233" alt="4"/>
            <img src="images/5.jpg" width="350" height="233" alt="5"/>
            <img src="images/slide2.jpg" width="350" height="233" alt="6"/>
            <img src="images/slide3.jpg" width="350" height="233" alt="7"/>
            <img src="images/slide4.jpg" width="350" height="233" alt="8"/>
                     </div>

<p class="body">There's a big difference between opening a boutique in Chicago and opening a Chicago Boutique. We are the latter - and proudly so. Forging relationships with local designers, championing their talents and ideas, and in the end growing along with them.</p>

<p class="body">A little refinement never hurt any city's image. And it's our hope that the clothing and jewelry designers we carry will start to move the community spotlight from deep-dish and dogs to Chicago fashion - a local gem just as tasty, just long overlooked.</p>

               </div>

          <div id="footer">
               <div class="footertext"><img class="footerimg" src="images/Cerato_Vine.png" alt="Vine"><br />
                      3451 n. southport ave. &#8226 chicago, illinois &#8226 60657 &#8226 773.248.8604
               </div>
           </div>
                  
     </div>
</div>
</body>
</html>