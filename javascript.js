



function validate() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    if (name == "") {


        alert("Please enter name");
        document.getElementById("name").focus();
        return false;
    }
    if (email == "") {


        alert("Please enter Email");
        document.getElementById("email").focus();
        return false;
    }

    if (email != '') {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (emailReg.test(email)) {
        }
        else {
            alert("Please Enter Valid  Email");
            document.getElementById("email").focus();
            return false;
        }
    }

    if (password == "") {


        alert("Please enter Password");
        document.getElementById("password").focus();
        return false;
    }
    if (confirmpassword == "") {


        alert("Please enter Password again");
        document.getElementById("confirmpassword").focus();
        return false;
    }

    if (password != confirmpassword) {


        alert("Passwords do not match");
        return false;
    }
}
function CheckFormat() {

    $("#cardnumber").mask("9999-9999-9999-9999");


}
function validategift() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var cardtype = document.getElementById("cardtype").value;
    var cardnumber = document.getElementById("cardnumber").value;
    var cvv = document.getElementById("cvv").value;
    var expmonth = document.getElementById("expmonth").value;
    var expyear = document.getElementById("expyear").value;

    if (name == "") {


        alert("Please enter name");
        document.getElementById("name").focus();
        return false;
    }
    if (email == "") {


        alert("Please enter Email");
        document.getElementById("email").focus();
        return false;
    }
    if (email != '') {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (emailReg.test(email)) {
        }
        else {
            alert("Please Enter Valid  Email");
            document.getElementById("email").focus();
            return false;
        }
    }


    if (cardtype == "0") {


        alert("Please select card type");
        document.getElementById("cardtype").focus();
        return false;
    }

    if (cardnumber == "") {


        alert("Please enter  card number");
        document.getElementById("cardnumber").focus();
        return false;
    }


    if (cardnumber.length != 19) {
        alert("Please enter proper  card number");
        document.getElementById("cardnumber").focus();
        return false;


    }

    var encodedcardnumber = btoa(cardnumber);
    document.getElementById("enccardnumber").value = encodedcardnumber;


    if (cvv == "") {


        alert("Please enter CVV");
        document.getElementById("cvv").focus();
        return false;
    }
    if (cvv.length < 3 || cvv.length > 4) {
        alert("Please enter proper CVV");
        document.getElementById("cvv").focus();
        return false;
    }
    var encodedcvv = btoa(cvv);
    document.getElementById("enccvv").value = encodedcvv;
    if (expmonth == "") {


        alert("Please enter expiry month");
        document.getElementById("expmonth").focus();
        return false;
    }
    if (expyear == "") {



        alert("Please enter expiry year");
        document.getElementById("expyear").focus();
        return false;
    }

    var currentDate = new Date();
    if (expmonth > 0 && expmonth < 13) {
        var curYear = currentDate.getFullYear().toString().slice(2);
        var formattedCCYear = expyear.toString();
        if (formattedCCYear.length == 1) {
            formattedCCYear = "0" + formattedCCYear;
        }
        if (expyear == curYear) {
            if (expmonth >= currentDate.getMonth() + 1) {

            }
            else {
                alert("Please enter proper expiry month");
                document.getElementById("expmonth").focus();
                return false;
            }
        }
        else if (expyear > parseInt(curYear)) {

        }
        else {
            alert("Please enter proper expiry year");
            document.getElementById("expyear").focus();
            return false;


        }
    }
    else {
        document.getElementById("expmonth").focus();
        alert("Please enter proper expiry month");
        return false;
    }

}