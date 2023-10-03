import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPointPaciente } from '../server';

const URL = `http://${url}:${port}/${entryPointPaciente}`;

const pacienteResolvers = {
  Query: {
    getPacientes: (_) => getRequest(URL, ''),
    getPaciente: (_, { id }) => generalRequest(`${URL}/${id}`, 'GET'),
  },
  Mutation: {
    createPaciente: (_, { input }) => postRequest(URL, 'POST', input),
    updatePaciente: (_, { id, input }) => putRequest(`${URL}/${id}`, 'PUT', input),
    deletePaciente: (_, { id }) => deleteRequest(`${URL}/${id}`, 'DELETE'),
  },
  Paciente: {
    // Resolver para resolver campos adicionales si es necesario
  },
};

export default pacienteResolvers;