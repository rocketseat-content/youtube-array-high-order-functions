const { childrenAge, mailList, shopCart } = require("./data");

/**
 * Adicione o ano de nascimento das crianças para cada elemento do array
 */
const children = childrenAge.reduce((list, age) => {
  list.push({
    age,
    birthYear: 2019 - age
  });
  return [...list];
}, []);

/**
 * Crie um array somente com os domínios da lista de email
 */

const domains = mailList.map(mail => {
  const mailArray = mail.split("@");
  return mailArray[1];
});

/**
 * Encontre o maior preço dos produtos abaixo de 100 reais
 */
const bellow100 = shopCart
  .filter(product => product.unitPrice <= 100)
  .reduce((lastProductUnitPrice, currentProduct) => {
    if (lastProductUnitPrice > currentProduct.unitPrice)
      return lastProductUnitPrice;

    return currentProduct.unitPrice;
  }, 0);

console.table(bellow100);
