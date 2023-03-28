document.getElementById("create").addEventListener("click", myResume);

function myResume() {
    let fullName = document.getElementById("fullName").value;
    let phone = document.getElementById("phone").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;
    let email = document.getElementById("email").value;
    let linkedin = document.getElementById("linkedin").value;
    let twitter = document.getElementById("twitter").value;
    let summary = document.getElementById("summary").value;
    let workEthic = document.getElementById("workEthic").value;
    let certs = document.getElementById("certs").value;
    let coding = document.getElementById("coding").value;
    let frameworks = document.getElementById("frameworks").value;
    let edu = document.getElementById("edu").value;
    let workStart1 = document.getElementById("workStart1").value;
    let workEnd1 = document.getElementById("workEnd1").value;
    let workDetails1 = document.getElementById("workDetails1").value;
    let workStart2 = document.getElementById("workStart2").value;
    let workEnd2 = document.getElementById("workEnd2").value;
    let workDetails2 = document.getElementById("workDetails2").value;
    let workStart3 = document.getElementById("workStart3").value;
    let workEnd3 = document.getElementById("workEnd3").value;
    let workDetails3 = document.getElementById("workDetails3").value;
    let reference = document.getElementById("reference").value;

    let resume = ("<!doctype html><html><head><title> Resume </title> <link rel='stylesheet' href='resumestyle.css'></head><body><div class='header'><h1>" + fullName + "</h1><h2>Contact</h2><p> Email: " + email + " | Phone: " + phone + " | Located in: " + city + ", " + state + " " + zip + "</p><p>");
    resume += (linkedin + twitter + "</p></div><div class='summary'><h2>About Me</h2><p>" + summary + "</p><p>" + workEthic + "</p><p>" + certs + "</p></div>");
    resume += ("<div class='skills'><h2>Skills and Education</h2><p>" + coding + "</p><p>" + frameworks + "</p><p>" + edu + "</p></div>");
    resume += ("<div class='work'><h2>Work Experience</h2><p>" + workStart1 + " - " + workEnd1 + "</p><p>" + workDetails1 + "</p>");
    if (workDetails2) {
        resume += ("<p>" + workStart2 + " - " + workEnd2 + "</p><p>" + workDetails2 + "</p>");
    }
    if (workDetails3) {
        resume += ("<p>" + workStart3 + " - " + workEnd3 + "</p><p>" + workDetails3 + "</p><");
    }
    resume += ("</div><div class='reference'><h2>Business Reference</h2><p>" + reference + "</p></div></body></html>");

    if (!(email)) {
        return false
    } else {
        newPage = window.open('about:blank', 'Resume', 'width=768,height=1024');
        newPage.document.write(resume);
    }


};