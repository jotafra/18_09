module.exports = class controllerNumbers{
    static async checkPar(req, res){
        const {numero} = req.body;

        if (typeof numero !== "number"){ // Conferencia da variavel, se é uma string ou um valor numérico
            return res.status(400).json({message: "Não é um número!"})
        }
        if (numero % 2 == 0) { // Comparação da divisão do numero por 2, se for 0 - True, outro valor - False
            return res.status(200).json({message:"Número Par!"});
        }
        return res.satus(200).json({message: "Numero Ímpar!"})
    }
    static async checkPrimo(req, res){
        const{numero} = req.body;

        if (typeof numero !== "number"){ // Conferencia da variavel, se é uma string ou um valor numérico
            return res.status(400).json({message: "Não é um número!"})
        }

        if (numero <= 1){ // Primeiro "Filtro" p/ numeros não primos
            return res.status(200).json({message: "Não é primo!"})
        }
        for (let i = 2; i < numero; i++){ // Segundo "Filtro" p/ numeros não primos 
            if (numero % i == 0){
                return res.status(200).json({message: "Não é primo!"})
            }
        }// Quando os numeros não se encaixam nos parametros acima ele faz o return da mensagem como n° primo
        return res.status(200).json({message: "É primo!"})
    }
}