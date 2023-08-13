import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TS',
    descricao: 'Ver a aula sem chorar',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Fazer atividade faculdade',
    descricao: 'Terminar as AO01',
    prioridade: 'urgente',
    status: 'concluída'
  },
  {
    titulo: 'Pagar contas',
    descricao: 'Pagar cartões de crédito',
    prioridade: 'normal',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
            titulo={t.titulo}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
