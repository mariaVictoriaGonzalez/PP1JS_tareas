const clientes = [
{"id":1,"first_name":"Lindon","last_name":"Stebbin","bank":"Banco Horizonte","city":"Paris 04","country":"France","salary":3673.89,"expenses":1641.08},
{"id":2,"first_name":"Brenna","last_name":"Kernar","bank":"Banco Atlas","city":"Zhangbagou","country":"China","salary":4599.07,"expenses":1814.98},
{"id":3,"first_name":"Gabriello","last_name":"Challener","bank":"Banco Nova","city":"Rio","country":"Brazil","salary":3553.77,"expenses":855.54},
{"id":4,"first_name":"Wilow","last_name":"Carlan","bank":"Banco Río","city":"Mazamet","country":"France","salary":3182.19,"expenses":644.97},
{"id":5,"first_name":"Amalee","last_name":"Knocker","bank":"Banco Centralis","city":"Kumamoto","country":"Japan","salary":2418.49,"expenses":1664.68},
{"id":6,"first_name":"Milty","last_name":"Raigatt","bank":"Banco Horizonte","city":"Chambar","country":"Pakistan","salary":3507.95,"expenses":2122.24},
{"id":7,"first_name":"Suki","last_name":"Coneron","bank":"Banco Atlas","city":"Malaba","country":"Kenya","salary":4535.69,"expenses":1606.48},
{"id":8,"first_name":"Papagena","last_name":"Glenn","bank":"Banco Nova","city":"Chak Two Hundred Forty-Nine TDA","country":"Pakistan","salary":2458.99,"expenses":2027.39},
{"id":9,"first_name":"Melamie","last_name":"Titchener","bank":"Banco Río","city":"Al Bīrah","country":"Palestine","salary":1744.14,"expenses":2276.54},
{"id":10,"first_name":"Christopher","last_name":"Jacobssen","bank":"Banco Centralis","city":"Aygezard","country":"France","salary":3940.78,"expenses":910.73},
{"id":11,"first_name":"Eliza","last_name":"Heaslip","bank":"Banco Horizonte","city":"Lukulu","country":"Zambia","salary":2654.46,"expenses":1656.9},
{"id":12,"first_name":"Abagael","last_name":"Laise","bank":"Banco Atlas","city":"Bayt Maqdūm","country":"Palestine","salary":2403.29,"expenses":672.83},
{"id":13,"first_name":"Valma","last_name":"Gwillym","bank":"Banco Nova","city":"Pagarbatu","country":"Indonesia","salary":4781.26,"expenses":1206.53},
{"id":14,"first_name":"Bobine","last_name":"Normanvill","bank":"Banco Río","city":"Loučeň","country":"Czech Republic","salary":1790.72,"expenses":600.18},
{"id":15,"first_name":"Vasilis","last_name":"Hairsnape","bank":"Banco Centralis","city":"Lagos","country":"Nigeria","salary":3724.6,"expenses":2146.69},
{"id":16,"first_name":"Neel","last_name":"Puleque","bank":"Banco Horizonte","city":"Norrtälje","country":"Sweden","salary":1635.83,"expenses":1328.7},
{"id":17,"first_name":"Quent","last_name":"Edelheit","bank":"Banco Atlas","city":"Ouro Branco","country":"Brazil","salary":2015.61,"expenses":1117.28},
{"id":18,"first_name":"Ruthie","last_name":"Prewett","bank":"Banco Nova","city":"Liangchahe","country":"China","salary":4327.39,"expenses":792.91},
{"id":19,"first_name":"Saundra","last_name":"Chadbourne","bank":"Banco Río","city":"Géfyra","country":"Greece","salary":3212.8,"expenses":964.14},
{"id":20,"first_name":"Terrye","last_name":"Dytham","bank":"Banco Centralis","city":"Guimarei","country":"Portugal","salary":2884.19,"expenses":1044.73},
{"id":21,"first_name":"Torr","last_name":"Minnette","bank":"Banco Horizonte","city":"Filiátes","country":"Greece","salary":2026.92,"expenses":802.7},
{"id":22,"first_name":"Charles","last_name":"Smye","bank":"Banco Atlas","city":"Bánov","country":"Czech Republic","salary":2303.74,"expenses":1786.53},
{"id":23,"first_name":"Sasha","last_name":"Poll","bank":"Banco Nova","city":"Ccuntuma","country":"Peru","salary":4698.67,"expenses":893.41},
{"id":24,"first_name":"Anatola","last_name":"Placidi","bank":"Banco Río","city":"Bảo Lộc","country":"Vietnam","salary":3437.52,"expenses":552.34},
{"id":25,"first_name":"Bank","last_name":"Rigmond","bank":"Banco Centralis","city":"Xichehe","country":"China","salary":3841.82,"expenses":1152.85},
{"id":26,"first_name":"Felix","last_name":"Delahunt","bank":"Banco Horizonte","city":"Las Vegas","country":"United States","salary":4446.29,"expenses":1336.97},
{"id":27,"first_name":"Hartley","last_name":"Phillins","bank":"Banco Atlas","city":"Banjar Cemenggon","country":"Indonesia","salary":4683.58,"expenses":1802.87},
{"id":28,"first_name":"Elena","last_name":"Capper","bank":"Banco Nova","city":"Castlebridge","country":"Ireland","salary":1908.36,"expenses":2462.51},
{"id":29,"first_name":"Kristyn","last_name":"Adnet","bank":"Banco Río","city":"Palaihari","country":"India","salary":3938.18,"expenses":707.12},
{"id":30,"first_name":"Dusty","last_name":"Mateuszczyk","bank":"Banco Centralis","city":"Hutang","country":"China","salary":3459.42,"expenses":2149.62},
{"id":31,"first_name":"Gun","last_name":"Stubbeley","bank":"Banco Horizonte","city":"Providence","country":"United States","salary":2206.05,"expenses":1158.7},
{"id":32,"first_name":"Ashby","last_name":"Danelutti","bank":"Banco Atlas","city":"Skopin","country":"Russia","salary":2471.83,"expenses":1315.66},
{"id":33,"first_name":"Belvia","last_name":"Blennerhassett","bank":"Banco Nova","city":"Otun","country":"Nigeria","salary":3995.94,"expenses":1175.57},
{"id":34,"first_name":"Lizzy","last_name":"Hail","bank":"Banco Río","city":"Malusac","country":"Philippines","salary":4114.06,"expenses":898.51},
{"id":35,"first_name":"Holt","last_name":"Voas","bank":"Banco Centralis","city":"Kafr az Zayyāt","country":"Egypt","salary":4969.73,"expenses":1560.35},
{"id":36,"first_name":"Nerta","last_name":"Glason","bank":"Banco Horizonte","city":"Gaopai","country":"China","salary":4914.2,"expenses":642.53},
{"id":37,"first_name":"Tabina","last_name":"Banes","bank":"Banco Atlas","city":"Boracéia","country":"Brazil","salary":2246.96,"expenses":1211.7},
{"id":38,"first_name":"Reiko","last_name":"McCallum","bank":"Banco Nova","city":"Ukhta","country":"Russia","salary":2116.56,"expenses":1924.98},
{"id":39,"first_name":"Peg","last_name":"Palffrey","bank":"Banco Río","city":"Cork","country":"Ireland","salary":3556.58,"expenses":836.7},
{"id":40,"first_name":"Wiley","last_name":"Daout","bank":"Banco Centralis","city":"Kukur","country":"Indonesia","salary":2257.8,"expenses":1341.6},
{"id":41,"first_name":"Eba","last_name":"Chander","bank":"Banco Horizonte","city":"Tamansari","country":"Indonesia","salary":4196.88,"expenses":1084.18},
{"id":42,"first_name":"Pascal","last_name":"Janicek","bank":"Banco Atlas","city":"Zvenigorod","country":"Russia","salary":3044.39,"expenses":1025.52},
{"id":43,"first_name":"Bibbye","last_name":"Trevallion","bank":"Banco Nova","city":"San Bernardo","country":"Chile","salary":2515.01,"expenses":553.31},
{"id":44,"first_name":"Florrie","last_name":"Huntress","bank":"Banco Río","city":"Sinait","country":"Philippines","salary":1682.48,"expenses":694.41},
{"id":45,"first_name":"Vernice","last_name":"Laite","bank":"Banco Centralis","city":"Ängelholm","country":"Sweden","salary":1663.23,"expenses":1272.07},
{"id":46,"first_name":"Natty","last_name":"Buxcy","bank":"Banco Horizonte","city":"Lodoyo","country":"Indonesia","salary":1780.21,"expenses":1971.03},
{"id":47,"first_name":"Karney","last_name":"Gartan","bank":"Banco Atlas","city":"Wangcao","country":"China","salary":3550.19,"expenses":2316.86},
{"id":48,"first_name":"Lorrayne","last_name":"Merigeau","bank":"Banco Nova","city":"San Alberto","country":"Argentina","salary":4454.95,"expenses":1529.97},
{"id":49,"first_name":"Walsh","last_name":"Cicculini","bank":"Banco Río","city":"Suruhwadang","country":"Indonesia","salary":4270.82,"expenses":2441.53},
{"id":50,"first_name":"Hana","last_name":"Sterley","bank":"Banco Centralis","city":"Tabwakea Village","country":"Kiribati","salary":3370.4,"expenses":1978.91}
];
///Balance mensual
function calcular_balance(salary, expenses) {
    const balance = Number((salary - expenses).toFixed(2))
    return balance
}
function imprimir_balance(clientes) {
    id_cliente_elegido = Number(prompt("Ingresa el id del cliente a buscar:"))
    let cliente = clientes.find((cliente)=> cliente.id === id_cliente_elegido)

    const balance_elegido = calcular_balance(cliente.salary, cliente.expenses)
    return `Nombre: ${cliente.first_name}, ${cliente.last_name}, Banco: ${cliente.bank}, Ahorro: $${balance_elegido}.`
}

console.log(imprimir_balance(clientes))

///clasificación financiera
function clasificar_clientes_por_ahorro(clientes) {
    clientes.forEach(cliente => {
        const balance = calcular_balance(cliente.salary, cliente.expenses)

        let categoria

        switch (true) {
            case balance < 500:
                categoria = "Ahorro bajo"
                break
            case balance <= 1500:
                categoria = "Ahorro medio"
                break
            default:
                categoria = "Ahorro alto"
        }

        console.log(cliente.first_name, categoria)
    })
}

clasificar_clientes_por_ahorro(clientes)
///Banco con mejor ahorro
///Pais con mejor ahorro
function calcular_ahorro_por_pais(clientes, key_elegida) {
    const resultado = {}

    clientes.forEach(cliente => {
        const clave = cliente[key_elegida]

        if (!resultado[clave]) {
            resultado[clave] = {
                clave: clave,
                cantidad_usuarios: 0,
                ahorro_total: 0
            };
        }

        resultado[clave].cantidad_usuarios++;
        resultado[clave].ahorro_total += calcular_balance(cliente.salary, cliente.expenses)
    })

    return resultado
}

console.log(calcular_ahorro_por_pais(clientes, "country"))
console.log(calcular_ahorro_por_pais(clientes, "bank"))