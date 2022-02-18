const texto: string = 'Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto. Las ideas que comunica un texto están contenidas en lo que se suele denominar, unidades estructurales de nivel superior o global, que otorgan coherencia al texto constituyendo su hilo central, el esqueleto estructural que cohesiona elementos lingüísticos formales de alto nivel, como los títulos y subtítulos, la secuencia de párrafos. En contraste, las microproposiciones son los elementos coadyuvantes de la cohesión de un texto, pero a nivel más particular o local';

const cienCaracteres = (texto: string, numeroCaracteres: number): string => {

    const textoCortado: string[] = texto.split(' ');

    const arrayIterable: string[] = textoCortado.map( palabra => `${palabra} `);

    let saltosDeLinea: number = Math.trunc( (texto.length / numeroCaracteres) );

    let caracteres: number = 0;

    for (let i = 1; i <= saltosDeLinea; i++ ) {
    
        for ( let [index, palabra] of arrayIterable.entries() ) {

            const ignorarSaltosLineaRegex: RegExp = /[\n]/;

            if ( !ignorarSaltosLineaRegex.test(palabra) ) {

                caracteres += palabra.length;
            };

            if ( caracteres >= numeroCaracteres * i ) {

                if ( arrayIterable[index + 1] === '\n' ) {

                    arrayIterable.splice(index + 1, 1);
                };

                arrayIterable.splice(index + 1, 0, '\n',);

                console.log(`Total caracteres: ${caracteres}. Palabra: ${palabra}`);

                caracteres = 0;

                break;
            }; 
        };
    };

    const textoUnido: string = arrayIterable.join('');

    return textoUnido;
};

const textoCienCaracteres: string = cienCaracteres(texto, 50);

console.log(textoCienCaracteres);