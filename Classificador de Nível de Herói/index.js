// Olá! fiz com input do usuário, achei mais legal assim :D

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome do(a) Heroi(Heroína): ", function (heroName) {
    rl.question("Digite a quantidade de XP: ", function (heroXP) {
        heroXP = parseInt(heroXP);

        let heroLevel;
        switch (true) {
            case heroXP >= 0 && heroXP < 1000:
                heroLevel = "Ferro";
                break;
            case heroXP >= 1001 && heroXP <= 2000:
                heroLevel = "Bronze";
                break;
            case heroXP >= 2001 && heroXP <= 5000:
                heroLevel = "Prata";
                break;
            case heroXP >= 5001 && heroXP <= 7000:
                heroLevel = "Ouro";
                break;
            case heroXP >= 7001 && heroXP <= 8000:
                heroLevel = "Platina";
                break;
            case heroXP >= 8001 && heroXP <= 9000:
                heroLevel = "Ascendente";
                break;
            case heroXP >= 9001 && heroXP <= 10000:
                heroLevel = "Imortal";
                break;
            case heroXP > 10001:
                heroLevel = "Radiante";
                break;
            case heroXP < 0:
                heroLevel = "Nossa nunca vi XP negativo rsrs"; // Testar negativo né, XP negativo não dá!
                break;
        }

        // esse detalhe dos backticks foi legal de aprender
        console.log(`O Herói (ou Heroína) de nome ${heroName} está no nível de ${heroLevel}`);

        rl.close();
    });
}); 