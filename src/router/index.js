import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AlunosView from '../views/AlunosView.vue'
import DetalheAlunoView from '../views/DetalheAlunoView.vue'
import MatriculasView from '../views/MatriculasView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/alunos',
    name: 'alunos',
    component: AlunosView
  },
  {
    path: '/alunos/:id',
    name: 'detalhe-aluno',
    component: DetalheAlunoView
  },
  {
    path: '/matriculas',
    name: 'matriculas',
    component: MatriculasView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router