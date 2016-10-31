var trashTalk;

var whichTrashTalk = Math.floor(Math.random() * 3);

if (whichTrashTalk === 0) {
    trashTalk = "'Eat my high score!'";
    } else if (whichTrashTalk === 1) {
        trashTalk = "'Level 9000!!!'";
    } else {
        trashTalk = "'Da best!'";
};

//function hsZero() {
//    if ($.trim($("#highscore").val())) === "0" {
//        alert("Highscore cannot be '0', please enter a score other than '0'");
//        }
//    return false;
//};

function checkBox() {
    if ($("#checkbox-yes").is(":checked")) {
        $("#trows").append("<td>" + trashTalk + "</td>");
    } else if ($("#checkbox-no").is(":checked")) {
        $("#trows").append("<td>" + "'No Trash Talk'" + "</td>");
    } else {
        return false;
    }
};

function ifNoInput() {
    if ($.trim($("#name").val()) === "" || $.trim($("#game").val()) === "" || $.trim($("#highscore").val()) === "" //|| //$.trim($("#date").val() === "mm/dd/yyyy")
       ) {
        alert("Please fill out all required fields");
        $("#trows").remove("<td>" + name + "</td>");
        $("#trows").remove("<td>" + game + "</td>");
        $("#trows").remove("<td>" + hs + "</td>");
        $("#trows").remove("<td>" + date + "</td>");
    }
    return false;
};

$("#button").click(function() {
    var name = $("#name").val();
    var game = $("#game").val();
    var date = $("#date").val();
    var hs = $("#highscore").val();
    
    //hsZero();
    
    $("#trows").append("<td>" + name + "</td>");
    $("#trows").append("<td>" + game + "</td>");
    $("#trows").append("<td>" + hs + "</td>");
    $("#trows").append("<td>" + date + "</td>");
    
    checkBox();
    //ifNoInput();
});