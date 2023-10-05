import { generalRequest, getRequest} from '../utilities';
import { url, port, entryPointPais } from '../server';

const URL = `http://${url}:${port}/${entryPointPais}`;

const paisResolvers = {
  Query: {
    getPaises: (_) => getRequest(URL, ''),
    getPais: (_, { id }) => generalRequest(`${URL}/${id}/`, 'GET'),
  },
  Mutation: {
    createPais: (_, { pais }) => generalRequest(`${URL}/`, 'POST', pais),
    updatePais: (_, { id, pais }) => generalRequest(`${URL}/${id}/`, 'PUT', pais),
    deletePais: (_, { id }) => generalRequest(`${URL}/${id}/`, 'DELETE'),
  },
};

export default paisResolvers;