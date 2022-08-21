const texto = document.getElementById("texto");
const btnEncrip= document.getElementById("btnEncrip");
const btnDesEn = document.getElementById("btnDesEn");
const mos = document.getElementById("mos")

//texto.value="perra"

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
function encriptar(){
    var tex =texto.value;
    tex=tex.split("")
    for(let i=0;i<tex.length;i++){
        if(tex[i]=="a"){
            tex[i]="ai"
        }
        if(tex[i]=="e"){
            tex[i]="enter"
        }
        if(tex[i]=="i"){
            tex[i]="imes"
        }
        if(tex[i]=="o"){
            tex[i]="ober"
        }
        if(tex[i]=="u"){
            tex[i]="ufat"
        }
    }
    return tex.join("")
}
function desEncriptar(){
    var tex =texto.value;
    tex=tex.split("")
    for(let i=0;i<tex.length;i++){
        if(tex[i]=="a"){
            tex.splice(i+1,1)
            //tex[i]="ai"
        }
        if(tex[i]=="e"){
            tex.splice(i+1,4)
            //tex[i]="enter"
        }
        if(tex[i]=="i"){
            tex.splice(i+1,3)
            //tex[i]="imes"
        }
        if(tex[i]=="o"){
            tex.splice(i+1,3)
            //tex[i]="ober"
        }
        if(tex[i]=="u"){
            tex.splice(i+1,3)
            //tex[i]="ufat"
        }
    }
    return tex.join("")
}
function mostrarEn(){
    mos.innerHTML=encriptar();
}
function mostrarDes(){
    mos.innerHTML=desEncriptar();
}
btnEncrip.onclick = mostrarEn;
btnDesEn.onclick=mostrarDes;