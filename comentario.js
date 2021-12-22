$(function(){
    

    $("#agregar").click(function(){
        var comment = $("textarea#mensaje").val();
        $("#cambio").text(comment);
        $("#imag").attr("src","img/nino4.jpg");
        $("#nuevo_nom").text("E. Ramos");
    });

});