import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar TS',
    descricao: 'Ver a aula sem chorar',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Fazer atividade faculdade',
    descricao: 'Terminar as AO01',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Pagar contas',
    descricao: 'Pagar cartões de crédito',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.PENDENTE
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
