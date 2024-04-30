async function submissionOfForm(event){
    event.preventDefault();
    console.log(event)

    //creation of 3 const for name_surname, email and message
    const name_surnameInput = document.getElementById("name_surnam");
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
            alert('Email successfully sent!')
        }
    }else{
        //error
        //alert('Invalid form!!!')
        if(validname_surname !== true){
            //display span_message
            const span_name_surname= document.getElementById("name_surnam_span");
            span_name_surname.classList.remove("hid")
        }
        if(validEmail !== true){
            //display span_email
            const span_email_= document.getElementById("email_span");
            span_email_.classList.remove("hid")
        }
        if(validMessage !== true){
            //display span_message
            const span_message_= document.getElementById("message_span");
            span_message_.classList.remove("hid")
        }
        
    }
}