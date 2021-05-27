
const apellido1 = "Genoveffi";
const apellido2 = "Suarez";

const esItaliano = () =>{
    
    if (apellido1.slice(-1) === "i"){
        return ( "Este apellidotiene muchas probabilidades de ser italiano")
    } else{
        return("Este apellido podria ser de cualquier pais")
    }
} 
console.log(esItaliano);
