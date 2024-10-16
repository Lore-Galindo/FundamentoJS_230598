// Tipos de datos en JS

 // 1.Undefinef - (NULL)

 console.warn("---tipo de dato UNDEFIEND")
 let cliente;
 console.log(`El cliente es: ${cliente}`);
 console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

 cliente = "Juan Romero"
 console.log(`El cliente es: ${cliente}`);
 console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
 
 cliente = 19227
 console.log(`El cliente es: ${cliente}`);
 console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

 //console.log(`El cliente ha realizado ${NumCompras} en este mes `);

//undefined es el tipo de dato que por defecto se asigna a variables no inicializada o no declaradas 

// 2. BOOLEAN -Boleanos- TRUE-FALSE (Falso/Verdaero)
console.warn("--- Tipo de Dato : BOOLEAN (Boleano/False");
let esPremium = "No lo sé";
console.log(`¿Es el cliente Premium?: ${esPremium}`)
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor /true/ a la variable.")
esPremium="true"
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
