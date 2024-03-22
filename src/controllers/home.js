module.exports = {
    async pagInicialGet(req, res) {
        res.render('../views/index.ejs');
    },
    async pagCadAlunoGet(req, res) {
        res.render('../views/cadastroAluno.ejs');
    },
    async pagCadSalaGet(req, res) {
        res.render('../views/cadastroSala.ejs');
    }

}