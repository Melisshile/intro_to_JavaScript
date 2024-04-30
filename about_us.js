const fullName = "Hilaire Ntibashima";
const my_pbg = {
    pers_det:"Personal Details",
    pers_obj:"Objective",
    pers_ed:"Education",
    pers_sk:"skills",
    pers_ac:"Activities",
    pers_pr:"Projects"
}
const content={
    cont_full_address:"2561 Block L Soshanguve 0152",
    cont_full_address_:"0655865443 | hilairentibashima@gmail.com",
    cont_objective:"To enhance my professional skills, capabilities, and knowledge in Technology",
    cont_education:"Tshwane University Of Technology",
    cont_education_:"Diploma Computer System Engineering <br>2022 to Date",
    cont_education__:"Lycée Sainte Famille de Kinama",

}
//full_name
document.getElementById("full_name").innerHTML = fullName;
//pbg
document.getElementById("pbg_").innerHTML = my_pbg.pers_det;
//obj
document.getElementById("obj").innerHTML = my_pbg.pers_obj;
//ed
document.getElementById("ed").innerHTML = my_pbg.pers_ed;
//sk
document.getElementById("sk").innerHTML = my_pbg.pers_sk;
//ac
document.getElementById("ac").innerHTML = my_pbg.pers_ac;
//pr
document.getElementById("pr").innerHTML = my_pbg.pers_pr;
//full_address
document.getElementById("full_address").innerHTML = content.cont_full_address;
document.getElementById("full_address_").innerHTML = content.cont_full_address_;
//objective
document.getElementById("objective").innerHTML = content.cont_objective;
//eduction
document.getElementById("education").innerHTML = content.cont_education;
document.getElementById("education_").innerHTML = content.cont_education_;
document.getElementById("education__").innerHTML = content.cont_education__;
//