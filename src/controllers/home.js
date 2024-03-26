const sala = require('../model/sala')
const aluno = require('../model/aluno');
module.exports = {
    async pagInicialGet(req, res) {
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDSala', 'Nome']
        });
        const alunos = await aluno.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDAluno', 'Nome', 'Idade', 'Foto'],
            where: {IDSala : id}
        })
        
        res.render('../views/index', {salas, alunos: '', id: ''});
    }
}

