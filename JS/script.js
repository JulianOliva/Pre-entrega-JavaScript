alert('Bienvenido a El rey de la Bebida.')  //Ingresando a la pagina se muestra mensaje de bienvenida.
confirm('Para continuar confirma que sos mayor de edad.')  //Se solicita al usurio mayoria de edad para poder naver en la web.

let edad = parseInt(prompt('Ingresa el número de tu edad en años')) //Se solicita ingresar edad en numero al usuario para poder continuar navegando.

// A continuacion, la consola confirma la edad para continuar navegando.
if (edad >= 18){
    console.log('Podés continuar con la compra.');
}else{
    console.warn('No podés realizar la compra hasta ser mayor de edad. Vamos a notificar a tus padres!');
}


//El siguiente paso de la web, es la eleccion de la bebida.
let bebida = (prompt('Que bebida de nuestra lista vas a llevar? Cerveza, Vino, Vodka, Aperitivo, Gin.'))

bebida = bebida.toLowerCase();

switch(bebida){
    case'cerveza':
        alert('Precio por menor es de $6000 y el precio por mayor es de $4500');
        break;
    case'vino':
        alert('Precio por menor es de $4000 y el precio por mayor es de $2500');
        break;
    case'vodka':
        alert('Precio por menor es de $8000 y el precio por mayor es de $6500');
        break;
    case'aperitivo':
        alert('Precio por menor es de $7500 y el precio por mayor es de $6000');
        break;
    case'gin':
        alert('Precio por menor es de $10500 y el precio por mayor es de $9000');
        break;
    default:
        alert('Introdujiste una opción no válida');
        break;    
}

// Se solicita al usuario ingresar tipo de pedido, si es por mayor cantidad o menor cantidad.
alert('Los pedidos por mayor son a partir de nueve items.')

let tipoDePedido = (prompt('Ingresa si el encargo es por mayor o por menor'))

tipoDePedido = tipoDePedido.toLowerCase();

//A continuacion se tiene qe dividir el tipo de pedido, si es por mayor o por menor ingresando la cantidad mayor o igual a nueve pedido por mayor.
if (tipoDePedido >= 9){
    console.log('El tipo de pedido es por Mayor')
} else{
    console.log('El tipo de pedido es por Menor')
}



function ordenDePedido(porMayor) {
    let mayor = "";
    do {
        mayor = prompt(`Ingrese su ${porMayor}. Se le pedirá nuevamente que ingrese el dato si lo deja vacío o aprieta cancelar.`);
    } while (mayor === "" || mayor === null);
    alert(`Su ${porMayor} es: ${mayor}`);
    return mayor;
}

const pedido = ordenDePedido ("pedido")


function ordenDeCompra(porMenor) {
    let menor = "";
    do {
        menor = prompt(`Ingrese su ${porMenor}. Se le pedirá nuevamente que ingrese el dato si lo deja vacío o aprieta cancelar.`);
    } while (menor === "" || menor === null);
    alert(`Su ${porMenor} es: ${menor}`);
    return menor;
}

const compra = ordenDeCompra ("compra")
























