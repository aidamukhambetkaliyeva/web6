$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#changeText").click(function () {
    $("#headline").text("IT-2503");
    $(".intro").html("<b>I love jQuery!</b>");
  });
  $("#dark").click(function () {
    $("body").css({ "background-color": "#222", "color": "#fff" });
  });
  $("#light").click(function () {
    $("body").css({ "background-color": "#fff", "color": "#000" });
  });

  $("#hide").click(function () { $("#status, #facts").hide(); });
  $("#show").click(function () { $("#status, #facts").show(); });
  $("#toggle").click(function () { $("#status, #facts").toggle(); });

  $("#fadeOut").click(function () { $(".pic").fadeOut(); });
  $("#fadeIn").click(function () { $(".pic").fadeIn(); });
  $("#fadeToggle").click(function () { $(".pic").fadeToggle(); });

  $(".head").click(function () {
    $(this).next(".panel").slideToggle();
  });
  $("#slideDownAll").click(function () { $(".panel").slideDown(); });
  $("#slideUpAll").click(function () { $(".panel").slideUp(); });

  $("#addSkill").click(function () {
    var skill = $("#skillInput").val().trim();
    if (skill === "") { alert("Enter a skill!"); return; }
    $("#skills").append("<li>" + skill + "</li>");
    $("#skillInput").val("");
  });
  $("#prependSkill").click(function () {
    var skill = $("#skillInput").val().trim();
    if (skill === "") { alert("Enter a skill!"); return; }
    $("#skills").prepend("<li>" + skill + "</li>");
    $("#skillInput").val("");
  });
  $("#removeSkill").click(function () {
    $("#skills li:last").remove();
  });

  $("#changeLink").click(function () {
    $("#link").attr("href", "https://www.linkedin.com").text("My LinkedIn");
  });

  $("#name").on("input", function () { $("#outName").text($(this).val()); });
  $("#email").on("input", function () { $("#outEmail").text($(this).val()); });

  var opened = false;
  $("#animate").click(function () {
    $(".bar").each(function () {
      var w = opened ? "0" : $(this).data("width");
      $(this).animate({ width: w }, 1000);
    });
    opened = !opened;
  });
});