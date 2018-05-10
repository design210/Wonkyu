  <script>
      $.backstretch([
          "/test/images/pot-holder.jpg",
          "/test/images/coffee.jpg",
          "/test/images/dome.jpg"
      ], {
          fade: 750,
          duration: 4000,
          preload: 1,
          start: 2
      });

     window.onload = function () {
      var gallery01 = new Wookmark('#gallery', {
          outerOffset: 5, // Optional, the distance to the containers border
          itemWidth: 190 // Optional, the width of a grid item
      });
    };
  </script>
</body>
 
</html>