$(function() {
  $("body > header").prependTo("body");
  $("main > h1").prependTo("header");
  $("figure").appendTo("article");
  var $first_fig = $("figure").first();
  var $second_fig = $("figure").last();
  $first_fig.find("img").prependTo($second_fig);
  $second_fig.find("img").last().prependTo($first_fig);
});
