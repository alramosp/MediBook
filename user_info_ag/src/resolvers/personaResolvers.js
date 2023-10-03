import { generalRequest, getRequest} from '../utilities';
import { url, port, entryPointPersona } from '../server';

const URL = `http://${url}:${port}/${entryPointPersona}`;

const personaResolvers = {
  Query: {
    getPersonas: (_) => getRequest(URL, ''),
    getPersona: (_, { id }) => generalRequest(`${URL}/${id}`, 'GET'),
  },
  Mutation: {
    createPersona: (_, { input }) => postRequest(URL, 'POST', input),
    updatePersona: (_, { id, input }) => putRequest(`${URL}/${id}`, 'PUT', input),
    deletePersona: (_, { id }) => deleteRequest(`${URL}/${id}`, 'DELETE'),
  },
};

export default personaResolvers;