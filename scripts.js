const QR_GENERATOR_URL="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let buttonDisabled= true;

function generateQRCode(){
    let text=document.querySelector("input");
    if(text.value && text.value.length>0){
        const fullURL=`${QR_GENERATOR_URL}${text.value}`;
        console.log(`${fullURL}`);
        const imgElement= document.getElementById("qrImage");
        imgElement.src=fullURL;
        const imgBox= document.getElementById("imgBox");
        imgBox.classList.add('show-img');
    }
    else{
        text.classList.add('error');
        setTimeout(()=>{text.classList.remove('error');}, 1000);
    }
}


function handleButtonState(){
    console.log("ButtonState");
    text=document.querySelector("input").value;
    console.log(text);
    if(text && text!=='')
        buttonDisabled=false;
    else
        buttonDisabled=true;
}