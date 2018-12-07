export interface Alarme {
    nome: String;       //Nome do remédio
    duracao: number;    //Número de dias da receita do remédio
    intervalo: number;  //De quantas em quantas horas o remédio deve ser tomado
    quantidade: any;    //Quantidade de comprimidos [0.5, 1, 2, ...]
}