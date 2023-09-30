async function bubbleSort(arr) {
    // Obtém o comprimento (número de elementos) do array
    const n = arr.length;
    // Variável para rastrear se houve trocas durante uma passagem
    let swapped;

    // O Bubble Sort é um algoritmo de ordenação que usa um loop "do...while"
    // para repetir as comparações e trocas até que a lista esteja completamente ordenada.
    do {
        // Define a variável 'swapped' como falsa no início de cada passagem.
        // Isso permite que o algoritmo saiba se houve trocas durante a passagem atual.
        swapped = false;

        // Um loop 'for' percorre os elementos do array (exceto o último).
        for (let i = 0; i < n - 1; i++) {
            // Compara o elemento atual (arr[i]) com o próximo elemento (arr[i + 1]).
            if (arr[i] > arr[i + 1]) {
                // Se o elemento atual for maior que o próximo, eles são trocados.
                // Isso significa que o elemento maior está "borbulhando" para cima.
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                // Define 'swapped' como verdadeiro, indicando que houve uma troca nesta passagem.
                swapped = true;
            }
        }
        // Após percorrer a lista uma vez, os elementos trocados estarão no topo,
        // então o maior elemento estará na posição mais alta.

        // A função 'updateBars' é chamada para atualizar a representação visual do array.
        // Ela aguarda um curto período de tempo para criar uma animação.
        await updateBars(arr);

        // O loop 'do...while' continua até que nenhuma troca seja feita durante uma passagem completa.
    } while (swapped);
}
