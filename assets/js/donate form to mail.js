function emailSend() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tobioamen@gmail.com",
        Password : " ",
        To : 'tobif556@gmail.com',
        From : "tobioamen@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}