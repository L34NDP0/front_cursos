<template>
    <div class="container mx-auto p-4">
        <!-- Cabeçalho -->
        <div class="mb-4">
            <button @click="voltar" class="btn btn-secondary mb-3">
                ← Voltar
            </button>
            <h1 class="text-3xl font-bold">Detalhes do Aluno</h1>
        </div>

        <!-- Card de Detalhes -->
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <!-- Informações Principais -->
                    <div class="col-md-8">
                        <h2 class="card-title h3 mb-4">{{ aluno.name }}</h2>
                        <div class="mb-3">
                            <strong>Email:</strong>
                            <p>{{ aluno.email }}</p>
                        </div>
                        <div class="mb-3">
                            <strong>Data de Cadastro:</strong>
                            <p>{{ formatarData(aluno.data_criacao) }}</p>
                        </div>
                        <div class="mb-3">
                            <strong>Última Atualização:</strong>
                            <p>{{ formatarData(aluno.data_atualizacao) }}</p>
                        </div>
                    </div>
                </div>

                <!-- Cursos Matriculados -->
                <div class="mt-4">
                    <h3 class="h4 mb-3">Cursos Matriculados</h3>
                    <div class="row">
                        <div v-for="curso in cursosMatriculados" :key="curso.id" class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">{{ curso.name }}</h5>
                                    <p class="card-text">{{ curso.descricao }}</p>
                                    <p class="text-muted">Duração: {{ curso.duracao }}h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetalheAluno',
    data() {
        return {
            aluno: {},
            cursosMatriculados: []
        }
    },
    methods: {
        voltar() {
            this.$router.push('/alunos')
        },
        formatarData(data) {
            if (!data) return '-'
            return new Date(data).toLocaleDateString('pt-BR')
        },
        async carregarAluno() {
            try {
                const alunoId = this.$route.params.id
                const responseAluno = await fetch(`http://localhost:5000/alunos/${alunoId}`)
                this.aluno = await responseAluno.json()

                // Carregar cursos matriculados
                const responseCursos = await fetch(`http://localhost:5000/alunos/${alunoId}/cursos`)
                this.cursosMatriculados = await responseCursos.json()
            } catch (erro) {
                console.error('Erro ao carregar dados:', erro)
            }
        }
    },
    mounted() {
        this.carregarAluno()
    }
}
</script>

<style scoped>
.card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-secondary {
    background-color: #6c757d;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
}

.btn-secondary:hover {
    background-color: #5a6268;
}
</style>