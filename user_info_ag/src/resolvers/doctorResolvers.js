import { generalRequest, getRequest} from '../utilities';
import { url, port, entryPointDoctor } from '../server';

const URL = `http://${url}:${port}/${entryPointDoctor}`;

const doctorResolvers = {
  Query: {
    getDoctores: (_) => getRequest(URL, ''),
    getDoctor: (_, { id }) => generalRequest(`${URL}/${id}`, 'GET'),
  },
  Mutation: {
    createDoctor: (_, { input }) => postRequest(URL, 'POST', input),
    updateDoctor: (_, { id, input }) => putRequest(`${URL}/${id}`, 'PUT', input),
    deleteDoctor: (_, { id }) => deleteRequest(`${URL}/${id}`, 'DELETE'),
  },
  Doctor: {
    // Resolver para resolver campos adicionales si es necesario
  },
};

export default doctorResolvers;