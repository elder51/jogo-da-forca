const palavras = [
    {
        palavra: "Amendoim",
        categoria: "Comida",
        dica1: "Possui Casca",
        dica2: "Fornece outras comidas",
        dica3: "Paçoca"
    },
    {
        palavra: "Arroz",
        categoria: "Comida",
        dica1: "Branco",
        dica2: "Grão",
        dica3: "Alomoço"
    },
    {
        palavra: "Amora",
        categoria: "Comida",
        dica1: "Cor Preta",
        dica2: "Antioxidante",
        dica3: "Cacho",
    },
    {
        palavra: "Abacaxi",
        categoria: "Comida",
        dica1: "Possui cor amarela",
        dica2: "Coroa",
        dica3: "Possui Casca"
    },
    {
        palavra: "Banana",
        categoria: "Comida",
        dica1: "Fruta",
        dica2: "Possui cor amarela",
        dica3: "Cacho"
    },
    {
        palavra: "Brigadeiro",
        categoria: "Comida",
        dica1: "Doce",
        dica2: "Chocolate",
        dica3: "Confete"
    },
    {
        palavra: "Bolacha",
        categoria: "Comida",
        dica1: "Salgada e Doce",
        dica2: "Café ou lanche",
        dica3: "Biscoito ou..."
    },
    {
        palavra: "Beringela",
        categoria: "Comida",
        dica1: "Cor roxa",
        dica2: "Prima do Pimentão",
        dica3: "Formato suspeito"
    },
    {
        palavra : "Camarão",
        categoria : "Comida",
        dica1: "Cor Laranja",
        dica2: "Do mar",
        dica3: "Crustáceo"
    },
    {
        palavra: "Coxinha",
        categoria: "Comida",
        dica1: "Salgado",
        dica2: "Grande ou pequena",
        dica3: "100% brasileira"
    },
    {
        palavra: "Charque",
        categoria: "Comida",
        dica1: "Carne",
        dica2: "Salgada",
        dica3: "Dessecada"
    },
    {
        palavra: "Cuscuz",
        categoria: "Comida",
        dica1: "Derivado do milho",
        dica2: "Nordestina",
        dica3: "Flocão"
    },
    {
        origin: "Cachorro quente",
        palavra: "Cachorro quente",
        categoria: "Comida",
        dica1: "Salsicha",
        dica2: "Molho",
        dica3: "Vai querer completo?"
    },
    {
        palavra: "Chocolate",
        categoria: "Comida",
        dica1: "Doce",
        dica2: "Branco e preto",
        dica3: "bombom, barra..."
    },
    {
        palavra : "Damasco",
        categoria : "Comida",
        dica1: "Fruta",
        dica2: "Cor laranja",
        dica3: "Um caroço"
    },
    {
        palavra: "Dobradinha",
        categoria: "Comida",
        dica1: "Feijão branco",
        dica2: "Apimentada",
        dica3: "Festa Junína"
    },
    {
        palavra: "Donuts",
        categoria: "Comida",
        dica1: "Redondo",
        dica2: "Sobremesa",
        dica3: "Americana"
    },
    {
        palavra : "Empada",
        categoria : "Comida",
        dica1: "Doce ou Salgada",
        dica2: "Torta pequena",
        dica3: "Crocante"
    },
    {
        palavra: "Enroladinho",
        categoria: "Comida",
        dica1: "Salgado",
        dica2: "Feiras",
        dica3: "Salsicha"
    },
    {
        palavra: "Empadão",
        categoria: "Comida",
        dica1: "Recheios variados",
        dica2: "Frango",
        dica3: "Empada grande"
    },
    {
        palavra: "Espaguete",
        categoria: "Comida",
        dica1: "Massa",
        dica2: "Almôndegas",
        dica3: "Garfo"
    },
    {
        palavra: "Ervilha",
        categoria: "Comida",
        dica1: "Cor verde",
        dica2: "A princesa e a...",
        dica3: "Milho e..."
    },
    {
        palavra : "Framboesa",
        categoria : "Comida",
        dica1: "Cor vermelha",
        dica2: "Cacho",
        dica3: "Xarope, geleia..."
    },
    {
        palavra: "Feijão",
        categoria: "Comida",
        dica1: "Almoço",
        dica2: "Ferro e cálcio",
        dica3: "Preto, branco, verde..."
    },
    {
        palavra: "Frango",
        categoria: "Comida",
        dica1: "Carne",
        dica2: "Recheio",
        dica3: "Assado, cozido"
    },
    {
        palavra: "Figado",
        categoria: "Comida",
        dica1:"Carne",
        dica2:"Mole",
        dica3:"Também é um órgão"
    },
    {
        palavra: "Fricassé",
        categoria: "Comida",
        dica1:"Receita com frango",
        dica2:"Molho branco",
        dica3:"Batata palha"
    },
    {
        palavra : "Gelatina",
        categoria : "Comida",
        dica1:"Frio",
        dica2:"Sobremesa",
        dica3:"Diversos sabores"
    },
    {
        palavra: "Galeto",
        categoria: "Comida",
        dica1:"Natal",
        dica2:"Assado na Brasa",
        dica3:"Deriva do galo"
    },
    {
        palavra: "Guacamole",
        categoria: "Comida",
        dica1:"Cor verde",
        dica2:"Molho",
        dica3:"Purê de abacate"
    },
    {
        palavra: "Goiabada",
        categoria: "Comida",
        dica1:"Doce",
        dica2:"Fruta",
        dica3:"Romeu e Julieta"
    },
    {
        palavra: "Guisado",
        categoria: "Comida",
        dica1:"Ensopado",
        dica2:"Preparado em panela",
        dica3:"Carne e gordura"
    },
    {
        palavra : "Hambúrguer",
        categoria : "Comida",
        dica1:"Fast Food",
        dica2:"Pão",
        dica3:"Queijo, cebola..."
    },
    {
        palavra : "Iogurte",
        categoria : "Comida",
        dica1:"Rosa ou branco",
        dica2:"Doce",
        dica3:"Laticínios"
    },
    {
        palavra: "Jerimum",
        categoria: "Comida",
        dica1:"Fruta",
        dica2:"Tem sementes pretas",
        dica3:"Laranja"
    },
    {
        palavra: "Jabuticaba",
        categoria: "Comida",
        dica1:"Fruta",
        dica2:"Faz bem pro coração",
        dica3:"Cor roxa"
    },
    {
        palavra: "Jenipapo",
        categoria: "Comida",
        dica1:"Fruta",
        dica2:"Cor amarelo-pardeado",
        dica3:"Ácida"
    },
    {
        palavra: "Linguiça",
        categoria: "Comida",
        dica1:"Carne de porco",
        dica2:"Comida roliça",
        dica3:"Fina, grossa ou comprida"
    },
    {
        palavra: "Lasanha",
        categoria: "Comida",
        dica1:"De carne, ou frango",
        dica2:"Massa, ou massa pronta",
        dica3:"Alomoço"
    },
    {
        palavra: "Lagosta",
        categoria: "Comida",
        dica1:"Crustáceo",
        dica2:"Possui garras",
        dica3:"Cor vermelha"
    },
    {
        palavra: "Melancia",
        categoria: "Comida",
        dica1:"Fruta",
        dica2:"Aquosa",
        dica3:"Cor verde e vermelha"
    },
    {
        palavra: "Mandioca",
        categoria: "Comida",
        dica1:"Raíz",
        dica2:"Interior branco",
        dica3:"Também conhecida como macaxeira"
    },
    {
        palavra: "Milho",
        categoria: "Comida",
        dica1:"Festa junina",
        dica2:"Receitas variadas",
        dica3:"Possui sabugo"
    },
    {
        palavra: "Mousse",
        categoria: "Comida",
        dica1:"Sobremesa",
        dica2:"Fria",
        dica3:"Sabores variados"
    },
    {
        palavra : "Nuggets",
        categoria : "Comida",
        dica1:"Comida congelada",
        dica2:"Fritura",
        dica3:"De frango"
    },
    {
        palavra: "Nachos",
        categoria: "Comida",
        dica1:"Apimentada",
        dica2:"Crocante",
        dica3:"Formarto triângular"
    },
    {
        palavra : "Omelete",
        categoria : "Comida",
        dica1:"Possui verduras",
        dica2:"Café da manhã",
        dica3:"Ovos"
    },
    {
        palavra: "Orégano",
        categoria: "Comida",
        dica1:"Tempero",
        dica2:"Dá aroma e sabor",
        dica3:"Cor preta e verde"
    },
    {
        palavra: "Ostra",
        categoria: "Comida",
        dica1:"Molusco",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Palmito",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Pimentão",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Peixe",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra : "Queijo",
        categoria : "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Quibe",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Quiabo",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra : "Risoto",
        categoria : "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Rabanete",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Ravioli",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra : "Salgadinho",
        categoria : "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Sushi",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Salsicha",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Salada",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra : "Tapioca",
        categoria : "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Torta",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Trufa",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Vatapá",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra : "Vinho",
        categoria : "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Vagem",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra : "Xerém",
        categoria : "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Yakisoba",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Alicate",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Aparelho",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Almofada",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Bracelete",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Bacia",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Brinco",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Balde",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Carta",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Cadeira",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Computador",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Caneta",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Disco",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Despertador",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Dicionário",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Dentadura",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Escada",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Escova",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Espelho",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Esmalte",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Envelope",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Frasco",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Fivela",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Frigideira",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Garfo",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        origin: "Guarda chuva",
        palavra: "Guarda chuva",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Guitarra",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Grampeador",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Gaiola",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Hidrante",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Haste",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Impressora",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Janela",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Jornal",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Jaqueta",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Jarra",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Kimono",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Lâmpada",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Lápis",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Livro",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Lixeira",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Máscara",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Martelo",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Mochila",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Mouse",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Monitor",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Notebook",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Navio",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Óculos",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Odontoscópio",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Orelhão",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Ombreira",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Prato",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Panela",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Pincel",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Porta",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Quadro",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Quadriciclo",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Relógio",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Raquete",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Régua",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Roteador",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Sapato",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Serra",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Sapatilha",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Saxofone",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Smartwatch",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Telefone",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Televisão",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Tênis",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Toalha",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Tesoura",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Uniforme",
        categoria: "Objeto",
    },
    {
        palavra: "Ukulele",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        palavra: "Umidificador",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Alface",
        categoria: "verdura",
        dica1: "verde",
        dica2:"salada",
        dica3:"forte"

    },
    {
        nome: "Jumento",
        categoria: "animal",
        dica1:"orelhudo",
        dica2:"cinza",
        dica3:"shrek"
    },
    {
        nome: "Inhame",
        categoria: "comida",
        dica1:"raiz",
        dica2:"branco",
        dica3:"nordestina"
    },
    {
        nome: "Barba Ruiva",
        categoria: "folclore",
        dica1:"rio",
        dica2:"laranja",
        dica3:"homem"
    },
    {
        nome: "Tacape",
        categoria: "arma",
        dica1:"idade da pedra",
        dica2:"pedra e madeira",
        dica3:"corda pedra de marmore"
    },
    {
        nome: "Profissão",
        categoria: "economista",
        dica1:"tatuador",
        dica2:"medico",
        dica3:"desenvolverdor de sistemas"
    },
    {
        nome: "Cãibra",
        categoria: "dor",
        dica1:"muscular",
        dica2:"torsão",
        dica3:"choque"
    },
    {
        nome: "Lazulita",
        categoria: "Mineral",
        dica1:"azul",
        dica2:"tem no minecraft",
        dica3:"faz encatamento"
    },
    {
        nome: "Echarpe",
        categoria: "objeto",
        dica1:"rosangela usa",
        dica2:"pano",
        dica3:"acessorio"
    },
    {
        nome: "Vestíbulo",
        categoria: "pátio de acesso à entrada de uma construção",
        dica1:"entrada",
        dica2:"começo",
        dica3:"inicio"
    },
    {
        nome: "Microfone",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        origin: "Zigue-Zague",
        nome: "Zigue-Zague",
        categoria: "linha ou série de linhas quebradas fazem...",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Magnético",
        categoria: "que puxa, agarra, fascina e atrai",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        origin: "Helena Ignez",
        nome: "Helena Ignez",
        categoria: "Atriz Brasileira",
        dica1:"",
        dica2:"",
        dica3:""
    },
]
