import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Erro na chamada do arquivo'));
}

function chamaArquivo(caminhoDoArquivo){
    const encoding = 'UTF-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if(erro){
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
}

chamaArquivo('./arquivos/texto.md')