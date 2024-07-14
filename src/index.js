function sendmail() {
    var params = {
        first_name: document.getElementById("firstname").value,
        email_id: document.getElementById("email").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value        
    }
    emailjs.send("service_eezbtyd","template_4n9ezer",params).then(function(res){
        alert("Your meassage has success sent. Thank You!" + res.status )
    })

}

