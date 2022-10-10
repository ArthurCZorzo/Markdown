import fs from 'fs';
import chalk from 'chalk';

function chamaArquivo(caminhoDoArquivo){
    const encoding = 'UTF-8';
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
        console.log(chalk.green(texto));
    })
}

chamaArquivo('./arquivos/texto.md')