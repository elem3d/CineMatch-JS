const PromptSync = require('prompt-sync');

const prompt = require('prompt-sync')({ sigint: true });

//=========================== CRIAÇÃO DO USUÁRIO ==================================

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
generosList.forEach((item) =>{console.log( item + '\n')})

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

//====================== CATALOGO E CLASSES ===================================
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
    constructor(id, titulo, tipo, generos, duracao, temporadas, episodios){
        super(id, titulo, tipo, generos, duracao);
        this.temporadas = temporadas;
        this.episodios = episodios;
    };
};

const catalogo = [
    // 1. Ação
    new Filme("1", "Mad Max: Estrada da Fúria", "Filme", ["Ação", "Ficção Científica"], 120),
    new Filme("2", "John Wick: De Volta ao Jogo", "Filme", ["Ação", "Crime"], 101),

    // 2. Aventura
    new Filme("3", "Senhor dos Anéis: A Sociedade do Anel", "Filme", ["Aventura", "Fantasia"], 178),
    new Serie("4", "Avatar: A Lenda de Aang", "Série", ["Aventura", "Animação"], 24, 3, 61),

    // 3. Animação (incluindo Anime)
    new Filme("5", "A Viagem de Chihiro", "Filme", ["Animação", "Fantasia"], 125),
    new Serie("6", "Demon Slayer (Kimetsu no Yaiba)", "Série", ["Animação", "Ação"], 24, 4, 63),

    // 4. Comédia
    new Filme("7", "As Branquelas", "Filme", ["Comédia"], 109),
    new Serie("8", "Brooklyn Nine-Nine", "Série", ["Comédia"], 22, 8, 153),

    // 5. Crime
    new Filme("9", "O Poderoso Chefão", "Filme", ["Crime", "Drama"], 175),
    new Serie("10", "Breaking Bad", "Série", ["Crime", "Drama"], 47, 5, 62),

    // 6. Documentário
    new Filme("11", "Nosso Planeta", "Documentário", ["Documentário"], 50),
    new Filme("12", "O Dilema das Redes", "Documentário", ["Documentário"], 94),

    // 7. Drama
    new Filme("13", "Um Sonho de Liberdade", "Filme", ["Drama"], 142),
    new Serie("14", "This Is Us", "Série", ["Drama"], 45, 6, 106),

    // 8. Fantasia
    new Filme("15", "Harry Potter e a Pedra Filosofal", "Filme", ["Fantasia", "Aventura"], 152),
    new Serie("16", "The Witcher", "Série", ["Fantasia", "Ação"], 60, 3, 24),

    // 9. Ficção Científica
    new Filme("17", "Interestelar", "Filme", ["Ficção Científica", "Drama"], 169),
    new Serie("18", "Stranger Things", "Série", ["Ficção Científica", "Suspense"], 50, 4, 34),

    // 10. Musical
    new Filme("19", "La La Land: Cantando Estações", "Filme", ["Musical", "Romance"], 128),
    new Filme("20", "O Rei do Show", "Filme", ["Musical", "Drama"], 105),

    // 11. Mistério
    new Filme("21", "Entre Facas e Segredos", "Filme", ["Mistério", "Comédia"], 130),
    new Serie("22", "Sherlock", "Série", ["Mistério", "Crime"], 90, 4, 13),

    // 12. Romance
    new Filme("23", "Como Eu Era Antes de Você", "Filme", ["Romance", "Drama"], 110),
    new Serie("24", "Bridgerton", "Série", ["Romance", "Drama"], 60, 3, 24),

    // 13. Suspense
    new Filme("25", "Ilha do Medo", "Filme", ["Suspense", "Mistério"], 138),
    new Serie("26", "Round 6 (Squid Game)", "Série", ["Suspense", "Drama"], 60, 2, 16),

    // 14. Terror
    new Filme("27", "Invocação do Mal", "Filme", ["Terror", "Mistério"], 112),
    new Filme("28", "Hereditário", "Filme", ["Terror", "Drama"], 127),

    // --- ITENS COM 3 OU MAIS CATEGORIAS ---
    // 1. Ação
    new Filme("29", "Batman: O Cavaleiro das Trevas", "Filme", ["Ação", "Crime", "Drama"], 152),
    // 2. Aventura
    new Filme("30", "Piratas do Caribe: A Maldição do Pérola Negra", "Filme", ["Aventura", "Ação", "Fantasia"], 143),
    // 3. Animação / Anime
    new Filme("31", "Spider-Man: Através do Aranhaverso", "Filme", ["Animação", "Ação", "Aventura"], 140),
    // 4. Comédia
    new Filme("32", "De Volta para o Futuro", "Filme", ["Comédia", "Aventura", "Ficção Científica"], 116),
    // 5. Crime
    new Filme("33", "Pulp Fiction: Tempo de Violência", "Filme", ["Crime", "Drama", "Suspense"], 154),
    // 6. Documentário (Convertido para Série para seguir o padrão de contagem de episódios)
    new Serie("34", "The Beatles: Get Back", "Série", ["Documentário", "Musical", "Drama"], 460, 1, 3),
    // 7. Drama
    new Filme("35", "O Auto da Compadecida", "Filme", ["Drama", "Comédia", "Aventura"], 104),
    // 8. Fantasia
    new Filme("36", "Pantera Negra", "Filme", ["Fantasia", "Ação", "Aventura"], 134),
    // 9. Ficção Científica
    new Filme("37", "Matrix", "Filme", ["Ficção Científica", "Ação", "Suspense"], 136),
    // 10. Musical
    new Filme("38", "Os Miseráveis", "Filme", ["Musical", "Drama", "Romance"], 158),
    // 11. Mistério
    new Filme("39", "Glass Onion: Um Mistério de Knives Out", "Filme", ["Mistério", "Comédia", "Crime"], 139),
    // 12. Romance
    new Filme("40", "Simplesmente Acontece", "Filme", ["Romance", "Comédia", "Drama"], 102),
    // 13. Suspense
    new Filme("41", "Seven: Os Sete Crimes Capitais", "Filme", ["Suspense", "Crime", "Mistério"], 127),
    // 14. Terror
    new Filme("42", "Um Lugar Silencioso", "Filme", ["Terror", "Ficção Científica", "Drama"], 90)
];

// =============== MENU INTERATIVO =====================

// ---------- Funções ------------

const exibirPerfil = (user) =>{
    console.log(`\n==== Perfil ====\n`);
    console.log(`Nome: ${user.nome}\n`);
    console.log(`Idade: ${user.idade}\n`);
    console.log(`Gêneros Favoritos: ${user.generosFavoritos}\n`);
    menuPrincipal();
};

const exibirCatalogo = (catalogo) => {
//P.S.: Dei uma pesquisada porque queria exibir algo organizado no console pra além de uma lista gigante, 
//mas a lógica é o uso do forEach e um console.log dentro com as propriedades do filme/série que quero exibir

    // Função auxiliar para preencher espaços e manter o alinhamento das colunas
    const padEnd = (str, length) => str.padEnd(length, ' ');

    const larguraCard = 42;
    const espacoColunas = "   ";

    // Percorre o catálogo em blocos de 3 para formar as colunas
    for (let i = 0; i < catalogo.length; i += 3) {
        const linhaItens = catalogo.slice(i, i + 3);
        
        let cabecalhos = [];
        let linhasGeneros = [];
        let linhasDuracao = [];
        let linhasTemporadas = [];
        let linhasEpisodios = [];
        let rodapes = [];

        //Percorre 3 itens do catálogo (que serão impressos na mesma linha)
        linhaItens.forEach(item => {
            const tituloTipo = `---------- ${item.titulo} (${item.tipo}) ----------`;
            cabecalhos.push(padEnd(tituloTipo, larguraCard));

            const generosStr = `|  Gêneros: [${item.generos.join(", ")}]`;
            linhasGeneros.push(padEnd(generosStr, larguraCard));

            const duracaoStr = `|  Duração: ${item.duracaoMin} min`;
            linhasDuracao.push(padEnd(duracaoStr, larguraCard));

            if (item instanceof Serie) {
                linhasTemporadas.push(padEnd(`|  Temporadas: ${item.temporadas}`, larguraCard));
                linhasEpisodios.push(padEnd(`|  Episódios: ${item.episodios}`, larguraCard));
            } else {
                linhasTemporadas.push(padEnd(`|  Temporadas: -`, larguraCard));
                linhasEpisodios.push(padEnd(`|  Episódios: -`, larguraCard));
            }

            rodapes.push(padEnd("-".repeat(38), larguraCard));
        });

        // Imprime a fileira com os 3 cards lado a lado
        console.log(cabecalhos.join(espacoColunas));
        console.log(linhasGeneros.join(espacoColunas));
        console.log(linhasDuracao.join(espacoColunas));
        console.log(linhasTemporadas.join(espacoColunas));
        console.log(linhasEpisodios.join(espacoColunas));
        console.log(rodapes.join(espacoColunas));
        console.log(""); // Linha em branco separando as fileiras
    }
    menuPrincipal()
};


const calcularCompatibilidades = (user, catalogo) => {
    catalogo.forEach((content) => {
        const afinidade =  content.calcularAfinidade(user.generosFavoritos);
        console.log(`${content.titulo} (${content.tipo}) \n ${afinidade}`);
    })
    menuPrincipal()
};

const exibirRecomendacaoPrincipal = (user, catalogo) => {
    
    const maisRecomendado = catalogo.reduce((anterior, atual) => {
        const afinidadeAnterior = anterior.generos.filter(g => user.generosFavoritos.includes(g)).length;
        const afinidadeAtual = atual.generos.filter(g => user.generosFavoritos.includes(g)).length;
        return afinidadeAtual > afinidadeAnterior ? atual : anterior;
    });

    const generosFaltantes = generosList.find(g => !user.generosFavoritos.includes(g));

    console.log(`\nRecomendação principal: ${maisRecomendado.titulo} (${maisRecomendado.tipo})`);
    if(generosFaltantes) {
        console.log(`Você já curte ${user.generosFavoritos[0]}, que tal arriscar um pouco de ${generosFaltantes}?`);
    }
};

// ----------- Menu --------------

const menuPrincipal = () =>{
    let opcao;

    do {
    console.log("\n===== CineMatch JS =====");
    console.log("1 - Ver meu perfil");
    console.log("2 - Ver catálogo completo");
    console.log("3 - Calcular compatibilidade com todos os conteúdos");
    console.log("4 - Ver o conteúdo mais recomendado");
    console.log("5 - Sair");
    
    opcao = prompt("Escolha uma opção: ");
    
    switch (opcao) {
        case "1":
        exibirPerfil(usuario);
        break;
        case "2":
        exibirCatalogo(catalogo);
        break;
        case "3":
        calcularCompatibilidades(usuario, catalogo);
        break;
        case "4":
        exibirRecomendacaoPrincipal(usuario, catalogo);
        break;
        case "5":
        console.log("Até a próxima maratona!");
        break;
        default:
        console.log("Opção inválida, tente novamente.");
    }
    } while (opcao !== "5");
}

menuPrincipal();