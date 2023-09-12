let a = 10,
    b = 20,
    c = 'Hola ',
    d = 'Spiderman',
    x = a + b;

  const saludo = c + d;

  console.log('%c Mis variables', 'color: blue; font-weight: bold');
  console.warn({a});
  console.error({b});
  console.log({c});
  console.table({a, b, c, d, x});
