// Reduce
const { shopCart } = require("../data");
// 1. Qual o valor total desse carrinho de compras
const totalValue = shopCart.reduce(
  (acc, item) => acc + item.quantity * item.unitPrice,
  0
);

// 2. Quantidade total de produtos do carrinho
const totalProducts = shopCart.reduce(
  (totalProduct, product) => totalProduct + product.quantity,
  0
);

console.table(totalProducts);
