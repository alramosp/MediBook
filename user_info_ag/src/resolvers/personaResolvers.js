import { generalRequest, getRequest} from '../utilities';
import { url, port, entryPointPersona } from '../server';

const URL = `http://${url}:${port}/${entryPointPersona}`;

const personaResolvers = {
  Query: {
    getPersonas: (_) => getRequest(URL, ''),
    getPersona: (_, { id }) => generalRequest(`${URL}/${id}/`, 'GET'),
  },
  Mutation: {
    createPersona: (_, { persona }) => generalRequest(`${URL}/`, 'POST', persona),
    updatePersona: (_, { id, persona }) => generalRequest(`${URL}/${id}/`, 'PUT', persona),
    deletePersona: (_, { id }) => generalRequest(`${URL}/${id}/`, 'DELETE'),
  },
};

export default personaResolvers;