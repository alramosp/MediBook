import { generalRequest, getRequest} from '../utilities';
import { url, port, entryPointPersona } from '../server';

const URL = `http://${url}:${port}/${entryPointPersona}`;

const personaResolvers = {
  Query: {
    getPersonas: (_) => getRequest(URL, ''),
    getPersona: (_, { id }) => generalRequest(`${URL}/${id}`, 'GET'),
  },
  Mutation: {
    createPersona: (_, { input }) => generalRequest(URL, 'POST', input),
    updatePersona: (_, { id, input }) => generalRequest(`${URL}/${id}`, 'PUT', input),
    deletePersona: (_, { id }) => generalRequest(`${URL}/${id}`, 'DELETE'),
  },
};

export default personaResolvers;