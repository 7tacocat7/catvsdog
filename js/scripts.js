$(document).ready(function(){
  $("button#meow").click(function(){
    $("ul#dog").prepend("<li>Bark!</li>");
    $("ul#cat").prepend("<li>meow</li>");

    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
  });
});

  $("button#bark").click(function(){
    $("ul#dog").prepend("<li>Bark!</li>");
    $("ul#cat").prepend("<li>meow</li>");

    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
});
});
