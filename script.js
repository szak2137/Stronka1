const body = document.body
// const div1 = document.createElement('div')
// body.appendChild(div1)
// div1.innerText = "div hihihi"
const zdjecie = document.querySelector('img')
const tekst = document.querySelector('#div1')
const guzik = document.querySelector('#img_guzior')
const budyn = document.querySelector('#budyn')
let count = 0;
function big(){
    zdjecie.width = zdjecie.width+10
    }
function smol(){
    zdjecie.width = zdjecie.width-10
    }
    
function jedz(){
    if(count>=8){
        tekst.innerHTML = "Kacperkowi bardzo smakuje, daj mu jeszcze troche budyniu🥺"
    }
    if(count>=22){
        tekst.innerHTML = "Kacperek jest coraz większy, lepiej uważaj żeby nie stał sie kulką"
    }
    if(count>25){
        zdjecie.src="img/kacperek_big.jpg"
        tekst.innerHTML="O nie!! Przez ciebie kacperek stał się gruby!😭<br>Kliknij na rodzine monet żeby go pocieszyć!"
        guzik.src="img/monet.jpg"
    }
    if(count>26){
        zdjecie.src="img/kacperek_happy.jpeg"
        zdjecie.width=368
        zdjecie.height=640
        tekst.innerHTML="Gratulacje użytkowniku! Teraz Kacperek jest szczęśliwy!🥳🥳"
        budyn.style.display='none'

    }
    if(count<26){
        zdjecie.width = zdjecie.width+30
        zdjecie.height = zdjecie.height+20}
    count++
}