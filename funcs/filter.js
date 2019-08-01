// FILTER
const { childrenAge, mailList } = require("../data");

// 1. Crianças entre 2 - 11 anos

const childrenFiltered = childrenAge.filter(
  element => element >= 2 && element <= 11
);

// 2. Emails rocketseat.com.br
const filteredMails = mailList.filter(mail => mail.includes("@rocketseat.com"));

console.table(filteredMails);
