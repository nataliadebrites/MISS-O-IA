const nomes = ["Henrique", "Larissa", "Natália", "Guilherme", "Rayssa", "Kelly", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)