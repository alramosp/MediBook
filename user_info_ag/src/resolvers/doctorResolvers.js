import { generalRequest, getRequest} from '../utilities';
import { url, port, entryPointDoctor } from '../server';

const URL = `http://${url}:${port}/${entryPointDoctor}`;

const doctorResolvers = {
  Query: {
    getDoctores: (_) => getRequest(URL, ''),
    getDoctor: (_, { id }) => generalRequest(`${URL}/${id}/`, 'GET'),
  },
  Mutation: {
    createDoctor: (_, { doctor }) => generalRequest(`${URL}/`, 'POST', doctor),
    updateDoctor: (_, { id, doctor }) => generalRequest(`${URL}/${id}/`, 'PUT', doctor),
    deleteDoctor: (_, { id }) => generalRequest(`${URL}/${id}/`, 'DELETE'),
  },
  Doctor: {
    // Resolver para resolver campos adicionales si es necesario
  },
};

export default doctorResolvers;