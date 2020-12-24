function signup() {
    let name = document.getElementById('Sname').value;
    let email = document.getElementById('Semail').value;
    email = email.toLowerCase();
    let password = document.getElementById('Spw').value;

    user = ({ userName: name, userEmail: email, userPassword: password })
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    const Http = new XMLHttpRequest();
    const url = 'https://localhost:3000';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));

    Http.onreadystatechange = (e) => {
        document.getElementById('res').innerHTML = Http.responseText;
    }
    return false
}

function login() {
    let Lemail = document.getElementById('Lemail').value;
    let Lpw = document.getElementById('Lpw').value;

    const Http = new XMLHttpRequest();
    const url = 'https://localhost:3000';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({ email: Lemail, pass: Lpw }));
    document.getElementById('Lemail').value = ""
    document.getElementById('Lpw').value = ""
    Http.onreadystatechange = (e) => {
        // console.log(Http.responseText)
        document.getElementById('result').innerHTML = Http.responseText;
    }
}