import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPointPaciente } from '../server';

const URL = `http://${url}:${port}/${entryPointPaciente}`;

const pacienteResolvers = {
  Query: {
    getPacientes: (_) => getRequest(URL, ''),
    getPaciente: (_, { id }) => generalRequest(`${URL}/${id}/`, 'GET'),
  },
  Mutation: {
    createPaciente: (_, { paciente }) => generalRequest(`${URL}/`, 'POST', paciente),
    updatePaciente: (_, { id, paciente }) => generalRequest(`${URL}/${id}/`, 'PUT', paciente),
    deletePaciente: (_, { id }) => generalRequest(`${URL}/${id}/`, 'DELETE'),
  },
  Paciente: {
    // Resolver para resolver campos adicionales si es necesario
  },
};

export default pacienteResolvers;