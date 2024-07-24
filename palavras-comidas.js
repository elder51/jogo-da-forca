const palavras1 = [
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
        palavra: "Açaí",
        categoria: "Comida",
        dica1: "Roxo",
        dica2: "Doce Típico",
        dica3: "Saudável"
    },
    {
        palavra: "Abacaxi",
        categoria: "Comida",
        dica1: "Amarelo",
        dica2: "Coroa",
        dica3: "Possui Casca"
    },
    {
        palavra: "Bolo",
        categoria: "Comida",
        dica1: "Aniversário",
        dica2: "Decorativo",
        dica3: "Trigo, leite..."
    },
    {
        palavra: "Banana",
        categoria: "Comida",
        dica1: "Potácil",
        dica2: "Amarela",
        dica3: "Cacho"
    },
    {
        palavra: "Brigadeiro",
        categoria: "Comida",
        dica1: "Docinho de...",
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
        dica1: "Roxa",
        dica2: "Prima do Pimentão",
        dica3: "Formato suspeito"
    },
    {
        palavra : "Camarão",
        categoria : "Comida",
        dica1: "Laranja",
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
        dica2: "Laranja",
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
        palavra: "Doce de leite",
        categoria: "Comida",
        dica1: "Sobremesa",
        dica2: "Pastoso ou sólido",
        dica3: "Lata de vidro"
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
        dica1: "Verde",
        dica2: "A princesa e a...",
        dica3: "Milho e..."
    },
    {
        palavra : "Framboesa",
        categoria : "Comida",
        dica1: "Vermelha",
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
    },
    {
        palavra: "Fricassé",
        categoria: "Comida",
    },
    {
        palavra : "Gelatina",
        categoria : "Comida",
    },
    {
        palavra: "Galeto",
        categoria: "Comida",
    },
    {
        palavra: "Guacamole",
        categoria: "Comida",
    },
    {
        palavra: "Goiabada",
        categoria: "Comida",
    },
    {
        palavra: "Guisado",
        categoria: "Comida",
    },
    {
        palavra : "Hambúrguer",
        categoria : "Comida",
    },
    {
        palavra : "Iogurte",
        categoria : "Comida",
    },
    {
        palavra : "Jiló",
        categoria : "Comida"
    },
    {
        palavra: "Jerimum",
        categoria: "Comida",
    },
    {
        palavra: "Jaca",
        categoria: "Comida",
    },
    {
        palavra: "Jabuticaba",
        categoria: "Comida",
    },
    {
        palavra: "Jenipapo",
        categoria: "Comida",
    },
    {
        palavra: "Kibe",
        categoria: "Comida",
    },
    {
        palavra: "Kiwi",
        categoria: "Comida",
    },
    {
        palavra : "Limão",
        categoria : "Comida",
    },
    {
        palavra: "Linguiça",
        categoria: "Comida",
    },
    {
        palavra: "Lasanha",
        categoria: "Comida",
    },
    {
        palavra: "Lagosta",
        categoria: "Comida",
    },
    {
        palavra: "Lámen",
        categoria: "Comida",
    },
    {
        palavra : "Mamão",
        categoria : "Comida",
    },
    {
        palavra: "Melancia",
        categoria: "Comida",
    },
    {
        palavra: "Mandioca",
        categoria: "Comida",
    },
    {
        palavra: "Milho",
        categoria: "Comida",
    },
    {
        palavra: "Mousse",
        categoria: "Comida",
    },
    {
        palavra : "Nuggets",
        categoria : "Comida",
    },
    {
        palavra: "Nachos",
        categoria: "Comida",
    },
    {
        palavra: "Nabo",
        categoria: "Comida",
    },
    {
        palavra: "Noz",
        categoria: "Comida",
    },
    {
        palavra : "Omelete",
        categoria : "Comida",
    },
    {
        palavra: "Orégano",
        categoria: "Comida",
    },
    {
        palavra: "Ovo",
        categoria: "Comida",
    },
    {
        palavra: "Ostra",
        categoria: "Comida",
    },
    {
        palavra : "Pasta de amendoim",
        categoria : "Comida",
    },
    {
        palavra: "Palmito",
        categoria: "Comida",
    },
    {
        palavra: "Pão",
        categoria: "Comida",
    },
    {
        palavra: "Pimentão",
        categoria: "Comida",
    },
    {
        palavra: "Peixe",
        categoria: "Comida",
    },
    {
        palavra : "Queijo",
        categoria : "Comida",
    },
    {
        palavra: "Quibe",
        categoria: "Comida",
    },
    {
        palavra: "Quiabo",
        categoria: "Comida",
    },
    {
        palavra : "Risoto",
        categoria : "Comida"
    },
    {
        palavra: "Rabanete",
        categoria: "Comida",
    },
    {
        palavra: "Ravioli",
        categoria: "Comida",
    },
    {
        palavra: "Romã",
        categoria: "Comida",
    },
    {
        palavra : "Salgadinho",
        categoria : "Comida",
    },
    {
        palavra: "Sushi",
        categoria: "Comida",
    },
    {
        palavra: "Sopa",
        categoria: "Comida",
    },
    {
        palavra: "Salsicha",
        categoria: "Comida",
    },
    {
        palavra: "Salada",
        categoria: "Comida",
    },
    {
        palavra : "Tapioca",
        categoria : "Comida",
    },
    {
        palavra: "Torta",
        categoria: "Comida",
    },
    {
        palavra: "Tacos",
        categoria: "Comida",
    },
    {
        palavra: "Trufa",
        categoria: "Comida",
    },
    {
        palavra: "Tofu",
        categoria: "Comida",
    },
    {
        palavra : "Uva",
        categoria : "Comida"
    },
    {
        palavra: "Vatapá",
        categoria: "Comida",
    },
    {
        palavra : "Vinho",
        categoria : "Comida"
    },
    {
        palavra: "Vagem",
        categoria: "Comida",
    },
    {
        palavra : "Xerém",
        categoria : "Comida"
    },
    {
        palavra: "Yakisoba",
        categoria: "Comida",
    },
]

const palavras2 = [
    {
        palavra: "Anel",
        categoria: "Objeto",
    },
    {
        palavra: "Alicate",
        categoria: "Objeto",
    },
    {
        palavra: "Anzol",
        categoria: "Objeto",
    },
    {
        palavra: "Aparelho",
        categoria: "Objeto"
    },
    {
        palavra: "Almofada",
        categoria: "Objeto",
    },
    {
        palavra: "Bracelete",
        categoria: "Objeto",
    },
    {
        palavra: "Bacia",
        categoria: "Objeto",
    },
    {
        palavra: "Brinco",
        categoria: "Objeto",
    },
    {
        palavra: "Balde",
        categoria: "Objeto"
    },
    {
        palavra: "Bolo",
        categoria: "Objeto",
    },
    {
        palavra: "Carta",
        categoria: "Objeto",
    },
    {
        palavra: "Cadeira",
        categoria: "Objeto",
    },
    {
        palavra: "Computador",
        categoria: "Objeto",
    },
    {
        palavra: "Caneta",
        categoria: "Objeto"
    },
    {
        palavra: "Copo",
        categoria: "Objeto",
    },
    {
        palavra: "Dado",
        categoria: "Objeto",
    },
    {
        palavra: "Disco",
        categoria: "Objeto",
    },
    {
        palavra: "Despertador",
        categoria: "Objeto",
    },
    {
        palavra: "Dicionário",
        categoria: "Objeto"
    },
    {
        palavra: "Dentadura",
        categoria: "Objeto",
    },
    {
        palavra: "Escada",
        categoria: "Objeto",
    },
    {
        palavra: "Escova",
        categoria: "Objeto",
    },
    {
        palavra: "Espelho",
        categoria: "Objeto",
    },
    {
        palavra: "Esmalte",
        categoria: "Objeto"
    },
    {
        palavra: "Envelope",
        categoria: "Objeto",
    },
    {
        palavra: "Faca",
        categoria: "Objeto",
    },
    {
        palavra: "Fone de ouvido",
        categoria: "Objeto",
    },
    {
        palavra: "Frasco",
        categoria: "Objeto",
    },
    {
        palavra: "Fivela",
        categoria: "Objeto"
    },
    {
        palavra: "Frigideira",
        categoria: "Objeto",
    },
    {
        palavra: "Garfo",
        categoria: "Objeto",
    },
    {
        palavra: "Guarda chuva",
        categoria: "Objeto",
    },
    {
        palavra: "Guitarra",
        categoria: "Objeto",
    },
    {
        palavra: "Grampeador",
        categoria: "Objeto"
    },
    {
        palavra: "Gaiola",
        categoria: "Objeto",
    },
    {
        palavra: "Hidrante",
        categoria: "Objeto",
    },
    {
        palavra: "Haste",
        categoria: "Objeto",
    },
    {
        palavra: "Impressora",
        categoria: "Objeto",
    },
    {
        palavra: "Ioiô",
        categoria: "Objeto",
    },
    {
        palavra: "Ímã",
        categoria: "Objeto",
    },
    {
        palavra: "Janela",
        categoria: "Objeto",
    },
    {
        palavra: "Jornal",
        categoria: "Objeto",
    },
    {
        palavra: "Jaqueta",
        categoria: "Objeto",
    },
    {
        palavra: "Jarra",
        categoria: "Objeto"
    },
    {
        palavra: "Kimono",
        categoria: "Objeto",
    },
    {
        palavra: "Lâmpada",
        categoria: "Objeto",
    },
    {
        palavra: "Lápis",
        categoria: "Objeto",
    },
    {
        palavra: "Livro",
        categoria: "Objeto"
    },
    {
        palavra: "Lixeira",
        categoria: "Objeto",
    },
    {
        palavra: "Máscara",
        categoria: "Objeto",
    },
    {
        palavra: "Martelo",
        categoria: "Objeto",
    },
    {
        palavra: "Mochila",
        categoria: "Objeto",
    },
    {
        palavra: "Mouse",
        categoria: "Objeto"
    },
    {
        palavra: "Monitor",
        categoria: "Objeto",
    },
    {
        palavra: "Notebook",
        categoria: "Objeto",
    },
    {
        palavra: "Navio",
        categoria: "Objeto",
    },
    {
        palavra: "Óculos",
        categoria: "Objeto",
    },
    {
        palavra: "Odontoscópio",
        categoria: "Objeto",
    },
    {
        palavra: "Orelhão",
        categoria: "Objeto",
    },
    {
        palavra: "Ombreira",
        categoria: "Objeto"
    },
    {
        palavra: "Prato",
        categoria: "Objeto",
    },
    {
        palavra: "Panela",
        categoria: "Objeto",
    },
    {
        palavra: "Pincel",
        categoria: "Objeto",
    },
    {
        palavra: "Porta",
        categoria: "Objeto"
    },
    {
        palavra: "Pote",
        categoria: "Objeto",
    },
    {
        palavra: "Quadro",
        categoria: "Objeto",
    },
    {
        palavra: "Quadriciclo",
        categoria: "Objeto",
    },
    {
        palavra: "Relógio",
        categoria: "Objeto",
    },
    {
        palavra: "Roda",
        categoria: "Objeto",
    },
    {
        palavra: "Raquete",
        categoria: "Objeto",
    },
    {
        palavra: "Régua",
        categoria: "Objeto"
    },
    {
        palavra: "Roteador",
        categoria: "Objeto",
    },
    {
        palavra: "Sapato",
        categoria: "Objeto",
    },
    {
        palavra: "Serra",
        categoria: "Objeto",
    },
    {
        palavra: "Sapatilha",
        categoria: "Objeto",
    },
    {
        palavra: "Saxofone",
        categoria: "Objeto"
    },
    {
        palavra: "Smartwatch",
        categoria: "Objeto",
    },
    {
        palavra: "Telefone",
        categoria: "Objeto",
    },
    {
        palavra: "Televisão",
        categoria: "Objeto",
    },
    {
        palavra: "Tênis",
        categoria: "Objeto",
    },
    {
        palavra: "Toalha",
        categoria: "Objeto"
    },
    {
        palavra: "Tesoura",
        categoria: "Objeto",
    },
    {
        palavra: "Uniforme",
        categoria: "Objeto",
    },
    {
        palavra: "Ukulele",
        categoria: "Objeto",
    },
    {
        palavra: "Umidificador",
        categoria: "Objeto",
    },
]
