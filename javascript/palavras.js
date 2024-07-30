const palavras = [
    {
        nome: "Amendoim",
        categoria: "Comida",
        dica1: "Possui Casca",
        dica2: "Fornece outras comidas",
        dica3: "Paçoca"
    },
    {
        nome: "Arroz",
        categoria: "Comida",
        dica1: "Branco",
        dica2: "Grão",
        dica3: "Alomoço"
    },
    {
        nome: "Amora",
        categoria: "Comida",
        dica1: "Cor Preta",
        dica2: "Antioxidante",
        dica3: "Cacho",
    },
    {
        nome: "Abacaxi",
        categoria: "Comida",
        dica1: "Possui cor amarela",
        dica2: "Coroa",
        dica3: "Possui Casca"
    },
    {
        nome: "Banana",
        categoria: "Comida",
        dica1: "Fruta",
        dica2: "Possui cor amarela",
        dica3: "Cacho"
    },
    {
        nome: "Brigadeiro",
        categoria: "Comida",
        dica1: "Doce",
        dica2: "Chocolate",
        dica3: "Confete"
    },
    {
        nome: "Bolacha",
        categoria: "Comida",
        dica1: "Salgada e Doce",
        dica2: "Café ou lanche",
        dica3: "Biscoito ou..."
    },
    {
        nome: "Beringela",
        categoria: "Comida",
        dica1: "Cor roxa",
        dica2: "Prima do Pimentão",
        dica3: "Formato suspeito"
    },
    {
        nome: "Camarão",
        categoria: "Comida",
        dica1: "Cor Laranja",
        dica2: "Do mar",
        dica3: "Crustáceo"
    },
    {
        nome: "Coxinha",
        categoria: "Comida",
        dica1: "Salgado",
        dica2: "Grande ou pequena",
        dica3: "100% brasileira"
    },
    {
        nome: "Charque",
        categoria: "Comida",
        dica1: "Carne",
        dica2: "Salgada",
        dica3: "Dessecada"
    },
    {
        nome: "Cuscuz",
        categoria: "Comida",
        dica1: "Derivado do milho",
        dica2: "Nordestina",
        dica3: "Flocão"
    },
    {
        nome: "Cachorro quente",
        categoria: "Comida",
        dica1: "Salsicha",
        dica2: "Molho",
        dica3: "Vai querer completo?"
    },
    {
        nome: "Chocolate",
        categoria: "Comida",
        dica1: "Doce",
        dica2: "Branco e preto",
        dica3: "bombom, barra..."
    },
    {
        nome: "Damasco",
        categoria: "Comida",
        dica1: "Fruta",
        dica2: "Cor laranja",
        dica3: "Um caroço"
    },
    {
        nome: "Dobradinha",
        categoria: "Comida",
        dica1: "Feijão branco",
        dica2: "Apimentada",
        dica3: "Festa Junína"
    },
    {
        nome: "Donuts",
        categoria: "Comida",
        dica1: "Redondo",
        dica2: "Sobremesa",
        dica3: "Americana"
    },
    {
        nome: "Empada",
        categoria: "Comida",
        dica1: "Doce ou Salgada",
        dica2: "Torta pequena",
        dica3: "Crocante"
    },
    {
        nome: "Enroladinho",
        categoria: "Comida",
        dica1: "Salgado",
        dica2: "Feiras",
        dica3: "Salsicha"
    },
    {
        nome: "Empadão",
        categoria: "Comida",
        dica1: "Recheios variados",
        dica2: "Frango",
        dica3: "Empada grande"
    },
    {
        nome: "Espaguete",
        categoria: "Comida",
        dica1: "Massa",
        dica2: "Almôndegas",
        dica3: "Garfo"
    },
    {
        nome: "Ervilha",
        categoria: "Comida",
        dica1: "Cor verde",
        dica2: "A princesa e a...",
        dica3: "Milho e..."
    },
    {
        nome: "Framboesa",
        categoria: "Comida",
        dica1: "Cor vermelha",
        dica2: "Cacho",
        dica3: "Xarope, geleia..."
    },
    {
        nome: "Feijão",
        categoria: "Comida",
        dica1: "Almoço",
        dica2: "Ferro e cálcio",
        dica3: "Preto, branco, verde..."
    },
    {
        nome: "Frango",
        categoria: "Comida",
        dica1: "Carne",
        dica2: "Recheio",
        dica3: "Assado, cozido"
    },
    {
        nome: "Figado",
        categoria: "Comida",
        dica1:"Carne",
        dica2:"Mole",
        dica3:"Também é um órgão"
    },
    {
        nome: "Fricassé",
        categoria: "Comida",
        dica1:"Receita com frango",
        dica2:"Molho branco",
        dica3:"Batata palha"
    },
    {
        nome: "Gelatina",
        categoria: "Comida",
        dica1:"Frio",
        dica2:"Sobremesa",
        dica3:"Diversos sabores"
    },
    {
        nome: "Galeto",
        categoria: "Comida",
        dica1:"Natal",
        dica2:"Assado na Brasa",
        dica3:"Deriva do galo"
    },
    {
        nome: "Guacamole",
        categoria: "Comida",
        dica1:"Cor verde",
        dica2:"Molho",
        dica3:"Purê de abacate"
    },
    {
        nome: "Goiabada",
        categoria: "Comida",
        dica1:"Doce",
        dica2:"Fruta",
        dica3:"Romeu e Julieta"
    },
    {
        nome: "Guisado",
        categoria: "Comida",
        dica1:"Ensopado",
        dica2:"Preparado em panela",
        dica3:"Carne e gordura"
    },
    {
        nome: "Hambúrguer",
        categoria: "Comida",
        dica1:"Fast Food",
        dica2:"Pão",
        dica3:"Queijo, cebola..."
    },
    {
        nome: "Iogurte",
        categoria: "Comida",
        dica1:"Rosa ou branco",
        dica2:"Doce",
        dica3:"Laticínios"
    },
    {
        nome: "Jerimum",
        categoria: "Comida",
        dica1:"Fruta",
        dica2:"Tem sementes pretas",
        dica3:"Laranja"
    },
    {
        nome: "Jabuticaba",
        categoria: "Comida",
        dica1:"Fruta",
        dica2:"Faz bem pro coração",
        dica3:"Cor roxa"
    },
    {
        nome: "Jenipapo",
        categoria: "Comida",
        dica1:"Fruta",
        dica2:"Cor amarelo-pardeado",
        dica3:"Ácida"
    },
    {
        nome: "Linguiça",
        categoria: "Comida",
        dica1:"Carne de porco",
        dica2:"Comida roliça",
        dica3:"Fina, grossa ou comprida"
    },
    {
        nome: "Lasanha",
        categoria: "Comida",
        dica1:"De carne, ou frango",
        dica2:"Massa, ou massa pronta",
        dica3:"Alomoço"
    },
    {
        nome: "Lagosta",
        categoria: "Comida",
        dica1:"Crustáceo",
        dica2:"Possui garras",
        dica3:"Cor vermelha"
    },
    {
        nome: "Melancia",
        categoria: "Comida",
        dica1:"Fruta",
        dica2:"Aquosa",
        dica3:"Cor verde e vermelha"
    },
    {
        nome: "Mandioca",
        categoria: "Comida",
        dica1:"Raíz",
        dica2:"Interior branco",
        dica3:"Também conhecida como macaxeira"
    },
    {
        nome: "Milho",
        categoria: "Comida",
        dica1:"Festa junina",
        dica2:"Receitas variadas",
        dica3:"Possui sabugo"
    },
    {
        nome: "Mousse",
        categoria: "Comida",
        dica1:"Sobremesa",
        dica2:"Fria",
        dica3:"Sabores variados"
    },
    {
        nome: "Nuggets",
        categoria: "Comida",
        dica1:"Comida congelada",
        dica2:"Fritura",
        dica3:"De frango"
    },
    {
        nome: "Nachos",
        categoria: "Comida",
        dica1:"Apimentada",
        dica2:"Crocante",
        dica3:"Formarto triângular"
    },
    {
        nome: "Omelete",
        categoria: "Comida",
        dica1:"Possui verduras",
        dica2:"Café da manhã",
        dica3:"Ovos"
    },
    {
        nome: "Orégano",
        categoria: "Comida",
        dica1:"Tempero",
        dica2:"Dá aroma e sabor",
        dica3:"Cor preta e verde"
    },
    {
        nome: "Ostra",
        categoria: "Comida",
        dica1:"Molusco",
        dica2:"",
        dica3:""
    },
    {
        nome: "Palmito",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Pimentão",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Peixe",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Queijo",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Quibe",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Quiabo",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome : "Risoto",
        categoria : "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Rabanete",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Ravioli",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Salgadinho",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Sushi",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Salsicha",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Salada",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Tapioca",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Torta",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Trufa",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Vatapá",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome : "Vinho",
        categoria : "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Vagem",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Xerém",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Yakisoba",
        categoria: "Comida",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Alicate",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Aparelho",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Almofada",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Bracelete",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Bacia",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Brinco",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Balde",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Carta",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Cadeira",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Computador",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Caneta",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Disco",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Despertador",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Dicionário",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Dentadura",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Escada",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Escova",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Espelho",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Esmalte",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Envelope",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Frasco",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Fivela",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Frigideira",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Garfo",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Guarda chuva",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Guitarra",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Grampeador",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Gaiola",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Hidrante",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Haste",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Impressora",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Janela",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Jornal",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Jaqueta",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Jarra",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Kimono",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Lâmpada",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Lápis",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Livro",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Lixeira",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Máscara",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Martelo",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Mochila",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Mouse",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Monitor",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Notebook",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Navio",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Óculos",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Odontoscópio",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Orelhão",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Ombreira",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Prato",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Panela",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Pincel",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Porta",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Quadro",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Quadriciclo",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Relógio",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Raquete",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Régua",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Roteador",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Sapato",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Serra",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Sapatilha",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Saxofone",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Smartwatch",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Telefone",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Televisão",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Tênis",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Toalha",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Tesoura",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Uniforme",
        categoria: "Objeto",
    },
    {
        nome: "Ukulele",
        categoria: "Objeto",
        dica1:"",
        dica2:"",
        dica3:""
    },
    {
        nome: "Umidificador",
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
        nome: "Helena Ignez",
        categoria: "Atriz Brasileira",
        dica1:"",
        dica2:"",
        dica3:""
    },
]
