const logoH ="RheaHile";
const homeHi = "Home";
const aboutH = "About Us";
const contacth = "Contact Us";
const contactTittle = "My Contact";
const myFullName = "Hilaire Ntibashima";
var cityH = "Pretoria Gauteng", suburbH = "Block L Soshanguve 0152", numberphon = "0655865443 | hilairentibashima@gmail.com";
var userFullName = "Name&Surname", userEmail ="Email Address", msg = "Message";
var myEmail = "Email :<b> hilairentibashima@gmail.com</b>";
var youTubeH = "YouTube channel : ", youTubeName = "Rhea Hile", linkedInH = "LinkedIn :", linkedInHName = "<i>ntibashima hilaire</i>";
var cell = "Cell :", number = "+2765-586-5443", wNumber = "WhatsApp Number :";
const hid = "Invalid!";
//nav
document.getElementById("myLogo").innerHTML = logoH;
document.getElementById("homeH").innerHTML = homeHi;
document.getElementById("about").innerHTML = aboutH;
document.getElementById("cont").innerHTML = contacth;

//text 
document.getElementById("mycontactc").innerHTML = contactTittle;
document.getElementById("fullName").innerHTML = myFullName;
document.getElementById("city").innerHTML = cityH;
document.getElementById("suburb").innerHTML = suburbH;
document.getElementById("numberPhone").innerHTML = numberphon;
document.getElementById("userFullName").innerHTML = userFullName;
document.getElementById("userEmail").innerHTML = userEmail;
document.getElementById("msg").innerHTML = msg;
document.getElementById("myEmail").innerHTML = myEmail;
document.getElementById("youTubeH").innerHTML = youTubeH;
document.getElementById("youTubeName").innerHTML = youTubeName;
document.getElementById("linkedInH").innerHTML = linkedInH;
document.getElementById("linkedInHName").innerHTML = linkedInHName;
document.getElementById("cell").innerHTML = cell;
document.getElementById("number").innerHTML = number;
document.getElementById("wNumber").innerHTML = wNumber;
document.getElementById("numbers").innerHTML = number;
document.getElementById("hid").innerHTML = hid;
document.getElementById("hidEmail").innerHTML = hid;
document.getElementById("hidmsg").innerHTML = hid;


document.getElementById("myFormt").addEventListener("submit", async function submissionOfForm(event){
    event.preventDefault();
    // console.log(event)

    //creation of 3 const for name_surname, email and message
    const name_surnameInput = document.getElementById("namesur");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    //validating for not receiving a null value
    const validname_surname = name_surnameInput.value.trim() !== '' && messageInput.value.trim() !== '' && emailInput.validity.valid;
    const validEmail = name_surnameInput.value.trim() !== '' && messageInput.value.trim() !== '' && emailInput.validity.valid;
    const validMessage = name_surnameInput.value.trim() !== '' && messageInput.value.trim() !== '' && messageInput.validity.valid;

    //fetching data on email and message input
    const validForm = validEmail && validMessage && validname_surname;//checking the validity of the form
    
    if(validForm){
        //fetching data from the form
        const my_data_from_form= new FormData(event.target);

        const response = await fetch('https://formspree.io/f/mvoeloyw',
        {
            method:'POST',
            body : my_data_from_form,
            Headers:{
                'accept':'Application/json'
            }
        })
        const data = await response.json();
        //console.log(data);
        if(data.ok){
            alert('Email successfully sent!');
            document.getElementById('myFormt').reset();
        }
    }else{
        //error
        //alert('Invalid form!!!')
        if(validname_surname !== true){
            //display span_message
            const span_name_surname= document.getElementById("hid");
            span_name_surname.classList.remove("hid")
        }
        if(validEmail !== true){
            //display span_email
            const span_email_= document.getElementById("hidEmail");
            span_email_.classList.remove("hidEmail")
        }
        if(validMessage !== true){
            //display span_message
            const span_message_= document.getElementById("hidmsg");
            span_message_.classList.remove("hidmsg")
        }
        
    }
});
//displaying a sumission
document.getElementById('myFormt').addEventListener("submit",
                function()
                {
                    let name_surnameInput = document.getElementById("namesur");
                    let emailInput = document.getElementById("email");
                    let messageInput = document.getElementById("message");
                    if(name_surnameInput.value.trim() !== '' && messageInput.value.trim() !== '' && emailInput.validity.valid)
                        {
                            document.getElementById('submission_msg').innerHTML = "Thanks for your text!";
                            document.getElementById('submission_msg').style.color = "blue";
                        }
                        else{
                            document.getElementById('submission_msg').innerHTML = "Please, fill in all inputs!!!";
                            document.getElementById('submission_msg').style.color = "red";
                        }
                    
                }
            );