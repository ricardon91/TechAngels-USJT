//importando o pacote
const mongoose = require("mongoose");
//definindo o "schema"
//note a semelhança com recursos de bases relacionais
const ubsSchema = mongoose.Schema({
  nome: { type: String, required: true },  
  fone: { type: String, required: true },
  cep: { type: String, required: true },
  endereco: { type: String, required: true },
  numero: { type: String, required: true },
  bairro: { type: String, required: true },
  cidade: { type: String, required: true },
  uf: { type: String, required: true }  
});
//criamos o modelo associado ao nome Ubs e exportamos
//tornando acessível para outros módulos da aplicação
module.exports = mongoose.model("UBS", ubsSchema);