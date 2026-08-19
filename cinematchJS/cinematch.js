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

class Filme {
    id ="";
    titulo ="";
    generos ="";
    duracao = "";
    constructor(id, titulo, tipo, generos, duracao){
        this.id = id,
        this.titulo = titulo,
        this.tipo = tipo,
        this.generos = generos,
        this.duracaoMin = duracao
    }

    calcularAfinidade(genFav) {
        const genComum = genFav.reduce((acc, gen) =>{
            if(this.generos.some((g) => {return g === gen})){
                return acc + 1;
            }else{
                return acc;
            };
        }, 0);

        const compat = genComum / this.generos.length * 100;
        
        if(compat >= 80){
            return "Alta Afinidade"
        }else if(compat < 80 && compat >=50){
            return "Média Afinidade"
        }else{
            return "Baixa Afinidade"
        }; 
    };
};

class Serie extends Filme{
    temporadas = 0;
    constructor(id, titulo, tipo, generos, duracao, temporadas){
        super(id, titulo, tipo, generos, duracao);
        this.temporadas = temporadas;
    };
};

// Catálogo com 28 itens (2 de cada gênero, incluindo animes)
const catalogo = [
    // 1. Ação
    new Filme("1", "Mad Max: Estrada da Fúria", "Filme", ["Ação", "Ficção Científica"], 120),
    new Filme("2", "John Wick: De Volta ao Jogo", "Filme", ["Ação", "Crime"], 101),

    // 2. Aventura
    new Filme("3", "Senhor dos Anéis: A Sociedade do Anel", "Filme", ["Aventura", "Fantasia"], 178),
    new Serie("4", "Avatar: A Lenda de Aang", "Série", ["Aventura", "Animação"], 24, 3),

    // 3. Animação (incluindo Anime)
    new Filme("5", "A Viagem de Chihiro", "Filme", ["Animação", "Fantasia"], 125),
    new Serie("6", "Demon Slayer (Kimetsu no Yaiba)", "Série", ["Animação", "Ação"], 24, 4),

    // 4. Comédia
    new Filme("7", "As Branquelas", "Filme", ["Comédia"], 109),
    new Serie("8", "Brooklyn Nine-Nine", "Série", ["Comédia"], 22, 8),

    // 5. Crime
    new Filme("9", "O Poderoso Chefão", "Filme", ["Crime", "Drama"], 175),
    new Serie("10", "Breaking Bad", "Série", ["Crime", "Drama"], 47, 5),

    // 6. Documentário
    new Filme("11", "Nosso Planeta", "Documentário", ["Documentário"], 50),
    new Filme("12", "O Dilema das Redes", "Documentário", ["Documentário"], 94),

    // 7. Drama
    new Filme("13", "Um Sonho de Liberdade", "Filme", ["Drama"], 142),
    new Serie("14", "This Is Us", "Série", ["Drama"], 45, 6),

    // 8. Fantasia
    new Filme("15", "Harry Potter e a Pedra Filosofal", "Filme", ["Fantasia", "Aventura"], 152),
    new Serie("16", "The Witcher", "Série", ["Fantasia", "Ação"], 60, 3),

    // 9. Ficção Científica
    new Filme("17", "Interestelar", "Filme", ["Ficção Científica", "Drama"], 169),
    new Serie("18", "Stranger Things", "Série", ["Ficção Científica", "Suspense"], 50, 4),

    // 10. Musical
    new Filme("19", "La La Land: Cantando Estações", "Filme", ["Musical", "Romance"], 128),
    new Filme("20", "O Rei do Show", "Filme", ["Musical", "Drama"], 105),

    // 11. Mistério
    new Filme("21", "Entre Facas e Segredos", "Filme", ["Mistério", "Comédia"], 130),
    new Serie("22", "Sherlock", "Série", ["Mistério", "Crime"], 90, 4),

    // 12. Romance
    new Filme("23", "Como Eu Era Antes de Você", "Filme", ["Romance", "Drama"], 110),
    new Serie("24", "Bridgerton", "Série", ["Romance", "Drama"], 60, 3),

    // 13. Suspense
    new Filme("25", "Ilha do Medo", "Filme", ["Suspense", "Mistério"], 138),
    new Serie("26", "Round 6 (Squid Game)", "Série", ["Suspense", "Drama"], 60, 2),

    // 14. Terror
    new Filme("27", "Invocação do Mal", "Filme", ["Terror", "Mistério"], 112),
    new Filme("28", "Hereditário", "Filme", ["Terror", "Drama"], 127),

    // 1. Ação (3 categorias)
    new Filme("29", "Batman: O Cavaleiro das Trevas", "Filme", ["Ação", "Crime", "Drama"], 152),
    // 2. Aventura (3 categorias)
    new Filme("30", "Piratas do Caribe: A Maldição do Pérola Negra", "Filme", ["Aventura", "Ação", "Fantasia"], 143),
    // 3. Animação / Anime (3 categorias)
    new Filme("31", "Spider-Man: Através do Aranhaverso", "Filme", ["Animação", "Ação", "Aventura"], 140),
    // 4. Comédia (3 categorias)
    new Filme("32", "De Volta para o Futuro", "Filme", ["Comédia", "Aventura", "Ficção Científica"], 116),
    // 5. Crime (3 categorias)
    new Filme("33", "Pulp Fiction: Tempo de Violência", "Filme", ["Crime", "Drama", "Suspense"], 154),
    // 6. Documentário (3 categorias)
    new Filme("34", "The Beatles: Get Back", "Série", ["Documentário", "Musical", "Drama"], 460, 1),
    // 7. Drama (3 categorias)
    new Filme("35", "O Auto da Compadecida", "Filme", ["Drama", "Comédia", "Aventura"], 104),
    // 8. Fantasia (3 categorias)
    new Filme("36", "Pantera Negra", "Filme", ["Fantasia", "Ação", "Aventura"], 134),
    // 9. Ficção Científica (3 categorias)
    new Filme("37", "Matrix", "Filme", ["Ficção Científica", "Ação", "Suspense"], 136),
    // 10. Musical (3 categorias)
    new Filme("38", "Os Miseráveis", "Filme", ["Musical", "Drama", "Romance"], 158),
    // 11. Mistério (3 categorias)
    new Filme("39", "Ilha Rá-Tim-Bum / ou Knives Out 2... (Glass Onion)", "Filme", ["Mistério", "Comédia", "Crime"], 139), // Usando Glass Onion: Um Mistério de Knives Out
    // 12. Romance (3 categorias)
    new Filme("40", "Simplesmente Acontece", "Filme", ["Romance", "Comédia", "Drama"], 102),
    // 13. Suspense (3 categorias)
    new Filme("41", "Seven: Os Sete Crimes Capitais", "Filme", ["Suspense", "Crime", "Mistério"], 127),
    // 14. Terror (3 categorias)
    new Filme("42", "Um Lugar Silencioso", "Filme", ["Terror", "Ficção Científica", "Drama"], 90)
];
