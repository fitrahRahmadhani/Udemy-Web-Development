$("h1").addClass("heading");
$('button').addClass("btn-custom");

$(".disable").text("Disable");
$(".empha").html("<em>Italic</em>")

$("button a").attr("href", "https://google.com");

$("body").keypress(function(event){
    $("h1").text(event.key);
})