async function radixSort(arr) {
    // Encontra o maior número no array
    const maxNum = Math.max(...arr);
    const base = 10;
    let exp = 1;

    // O Radix Sort é um algoritmo de ordenação que classifica os números com base em seus dígitos.
    // Começa com o dígito menos significativo (unidades) e progride para o dígito mais significativo.
    // A variável 'exp' representa o dígito atual que estamos considerando.
    
    // O loop 'while' continuará até que 'exp' seja maior do que o maior número no array dividido por 10.
    // Isso ocorre porque, quando 'exp' se torna maior que o maior dígito em qualquer número no array,
    // todos os números já foram classificados completamente.

    while (Math.floor(maxNum / exp) > 0) {
        // A função 'countingSort' é chamada para classificar o array com base no dígito atual ('exp').
        await countingSort(arr, exp);

        // Multiplica 'exp' por 10 para mover para o próximo dígito à esquerda.
        exp *= base;

        // Após classificar com base em um dígito, chamamos 'updateBars' para atualizar a representação visual do array.
        // Isso permite que você visualize o progresso do algoritmo à medida que os dígitos são processados.
        await updateBars(arr);
    }
}
