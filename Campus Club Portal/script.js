function changeActivityText() {
    document.getElementById("sampleText").innerHTML = "Hello Students!";
}
function submitForm() {
    let name = document.getElementById("studentName").value;
    let club = document.getElementById("clubName").value;
    let interest = document.getElementById("areaInterest").value;
    let year = document.getElementById("studyYear").value;

    if (name == "" || club == "" || interest == "" || year == "") {
        document.getElementById("formMessage").innerHTML = "Please fill all fields!";
    } else {
        document.getElementById("formMessage").innerHTML = "Thank you " + name + "! You have successfully joined " + club + ".";
    }
}