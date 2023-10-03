import { generalRequest, getRequest} from '../utilities';
import { url, port, entryPointTipoDocumento } from '../server';
const URL = `http://${url}:${port}/${entryPointTipoDocumento}`;

const tipoDocumentoResolvers = {
  Query: {
    getTiposDocumentos: (_) => getRequest(URL, ''),
    getTipoDocumento: (_, { id }) => generalRequest(`${URL}/${id}`, 'GET'),
  },
  Mutation: {
    createTipoDocumento: (_, { tipoDocumento }) => postRequest(URL, 'POST', tipoDocumento),
    updateTipoDocumento: (_, { id, tipoDocumento }) => putRequest(`${URL}/${id}`, 'PUT', tipoDocumento),
    deleteTipoDocumento: (_, { id }) => deleteRequest(`${URL}/${id}`, 'DELETE'),
  },
};

export default tipoDocumentoResolvers;