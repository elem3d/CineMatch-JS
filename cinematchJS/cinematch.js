const prompt = require('prompt-sync')({ sigint: true });
const catalogo = require()

const generosList = [
  '1. Ação',
  '2. Aventura',
  '3. Animação',
  '4. Comédia',
  '5. Crime',
  '6. Documentário',
  '7. Drama',
  '8. Fantasia',
  '9. Ficção Científica',
  '10. Musical',
  '11. Mistério',
  '12. Romance',
  '13. Suspense',
  '14. Terror'
];


const generosTransform = (g) =>{
     switch(g){
        case "1":
            return g = "Ação";
            break;
        case "2":
            return g =  'Aventura';
            break;
        case "3":
            return g = 'Animação';
            break;
        case "4":
            return g = 'Comédia';
            break;
        case "5":
            return g = 'Crime';
            break;
        case "6":
            return g = 'Documentário';
            break;
        case "7":
            return g = 'Drama';
            break;
        case "8":
            return g = 'Fantasia';
            break;
        case "9":
            return g = 'Ficção Científica';
            break;
        case "10":
            return g = 'Musical';
            break;
        case "11":
            return g = 'Mistério';
            break;
        case "12":
            return g = 'Romance';
            break;
        case "13":
            return g = 'Suspense';
            break;
        case "14":
            return g = 'Terror';
            break; 
        default:
            return g = undefined;
            break;
    }
} ;

const nome = prompt('Qual é o seu nome? ');

const idade = Number(prompt('Qual é a sua idade? '));
generos.forEach((item) =>{console.log( item + '\n')})

let generosFav = ["","",""]

do{
    const generosInput = prompt(`Quais os 3 gêneros do cinema que você mais gosta? (separe os números escolhidos por vírgula)\n`);
    generosFav = generosInput.split(',')
    
}while (generosFav.every((genero) =>{ 
    if(parseInt(genero) >=1 && parseInt(genero) <=14) {
        return false;
    }else{
        return true;
    }
}));

const usuario = {
  nome: nome,
  idade: idade,
  generosFavoritos: generosFav.map((g) => {return generosTransform(g)}),
};
