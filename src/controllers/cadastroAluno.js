// Importando as tabelas do DB
const sala = require('../model/sala');
const aluno = require('../model/aluno');
module.exports = {
    async aluno(req, res) {
        // Encontrando todas as salas disponíveis no SQL
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDSala', 'Nome']
        });
        // Renderizando e passando o nome das salas para o front
        res.render('../views/cadastroAluno.ejs', { salas });
    },
    async ALunoInsert(req, res) {
        // Recebe as informações do front-end
        const dados = req.body;
        // Criando sala no banco de dados
        await sala.create({
            IDAluno: dados.IDAluno,
            Nome: dados.nome,
            Idade : dados.Idade,
            Sexo : dados.Sexo,
            Fotos: dados.Fotos
        });
        
        res.redirect('/');
    }
}