🚀 Prática HTTP com Node.js + Express
Servidor simples com Node.js + Express para praticar requisições HTTP usando GET (query params) e POST (body JSON).

📁 Estrutura do projeto
pratica-http-express/
├── server.js        # Servidor Express com rotas GET e POST
├── package.json     # Dependências do projeto
├── curl_tests.sh    # Script de testes com curl
├── .gitignore
└── README.md
▶️ Como rodar
1. Instale as dependências
npm install
2. Inicie o servidor
node server.js
O terminal exibirá:

✅ Servidor rodando em http://localhost:3000
🧪 Testando as rotas
🔵 GET — com query param
curl "http://localhost:3000/saudacao?nome=Luan"
Resposta esperada:

{
  "mensagem": "Olá, Luan! Requisição GET recebida com sucesso. 👋",
  "metodo": "GET",
  "queryRecebida": { "nome": "Luan" }
}
🟢 POST — com body JSON
curl -X POST http://localhost:3000/saudacao \
  -H "Content-Type: application/json" \
  -d '{"nome":"Luan"}'
Resposta esperada:

{
  "mensagem": "Dados recebidos! Bem-vindo, Luan! 🚀",
  "metodo": "POST",
  "bodyRecebido": { "nome": "Luan" }
}
⚡ Rodar todos os testes de uma vez
bash curl_tests.sh
📦 Dependências
Pacote	Uso
express	Framework HTTP
nodemon	Reinício automático (dev)
📝 Diferença entre query e body
Característica	request.query (GET)	request.body (POST)
Onde fica	Na URL (?chave=valor)	No corpo da requisição
Visível na URL	✅ Sim	❌ Não
Usado para	Filtros, buscas, paginação	Envio de dados, login, cadastro
Tamanho	Limitado	Maior capacidade