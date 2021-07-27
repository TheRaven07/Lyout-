/**Efecto modal en las imagenes Las clases Css*/

const MODAL = document.getElementById("modal");
const MODAL__CONTENT = document.getElementById("imgModal");
const CLOSE = document.getElementById("close");

/** Open img, + event click */
let img1 = document.getElementById("img1").addEventListener("click", openImg);
let img2 = document.getElementById("img2").addEventListener("click", openImg);
let img3 = document.getElementById("img3").addEventListener("click", openImg);
/** --- show image --- */
function openImg(){
        MODAL.style.display = "block";
        MODAL__CONTENT.src = this.src;   
}
/** --- Close img --- */
let span = document.getElementById("close").addEventListener("click",closeX);
/** --- Close -- */
function closeX(e){
    if(e.target.classList.contains("cerrar")){
        MODAL.style.display = "none";
    }
     
}
