
const apellido1 = "Genoveffi";
const apellido2 = "Suarez";

const esItaliano = (apellido) =>{
    
    if (apellido[apellido.length - 1] === "i"){
        return `${apellido} :Este apellidotiene muchas probabilidades de ser italiano`;
    } else if(apellido[apellido.length - 1 ] !== "i"){
        return`${apellido} :Este apellido podria ser de cualquier pais`
    }
} 
console.log(esItaliano(apellido1)); 
console.log(esItaliano(apellido2));
