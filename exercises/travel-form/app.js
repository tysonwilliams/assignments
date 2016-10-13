$(".button").click(function() {
    alert("First name: " + $("#fname").val() + "\nLast name: " + $("#lname").val() + "\nAge: " + $("#age").val() + "\nGender: " + $('input[name="gender"]:checked', '#gender').val() + "\nDestination: " + $('option[name="destination"]:checked', '#destination').val() + "\nDietary Restrictions: " + $('input[name="dietary"]:checked', "#dietary").val());
});