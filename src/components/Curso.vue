<template>
    <div class="card mb-3 cursor-pointer" @click="verDetalhes">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h5 class="card-title mb-0">{{ curso.name }}</h5>
                <span class="badge bg-secondary">{{ curso.duracao }}h</span>
            </div>

            <p class="card-text">{{ curso.descricao }}</p>

            <div class="d-flex justify-content-between align-items-center pt-3 border-top">
                <small class="text-muted">
                    Criado em: {{ formatarData(curso.data_criacao) }}
                </small>
                <div class="btn-group">
                    <button @click.stop="$emit('editar', curso)" class="btn btn-primary btn-sm">
                        Editar
                    </button>
                    <button @click.stop="$emit('deletar', curso.id)" class="btn btn-danger btn-sm ms-2">
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Curso",
    props: {
        curso: {
            type: Object,
            required: true
        }
    },
    methods: {
        formatarData(data) {
            if (!data) return '';
            // Garantir que a data seja convertida corretamente, considerando fuso horário
            const date = new Date(data + 'T00:00:00Z'); // Adicionando hora para garantir o formato completo
            return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
        },
        verDetalhes() {
            this.$router.push(`/curso/${this.curso.id}`);
        }
    }
};
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}

.card {
    min-height: 180px;
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
}
</style>
