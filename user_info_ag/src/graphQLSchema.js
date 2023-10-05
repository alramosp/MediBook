import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

// Importa los typeDefs y resolvers para tus tablas (Pais, TipoDocumento, Persona, Doctor, Paciente)
import {
  paisMutations,
  paisQueries,
  paisTypeDefs
} from './typeDefs/paisTypeDefs';

import paisResolvers from './resolvers/paisResolvers';

import {
  tipoDocumentoTypeDefs,
  tipoDocumentoQueries,
  tipoDocumentoMutations
} from './typeDefs/DocumentoTypeDefs';

import tipoDocumentoResolvers from './resolvers/DocumentoResolvers';

import {
  personaMutations,
  personaQueries,
  personaTypeDefs
} from './typeDefs/personaTypeDefs';

import personaResolvers from './resolvers/personaResolvers';

import {
  doctorMutations,
  doctorQueries,
  doctorTypeDefs
} from './typeDefs/doctorTypeDefs';

import doctorResolvers from './resolvers/doctorResolvers';

import {
  pacienteMutations,
  pacienteQueries,
  pacienteTypeDefs
} from './typeDefs/pacienteTypeDefs';

import pacienteResolvers from './resolvers/pacienteResolvers';

// Merge de los typeDefs

const mergedTypeDefs = mergeSchemas(
  ['scalar JSON'
  ,paisTypeDefs, tipoDocumentoTypeDefs, personaTypeDefs, doctorTypeDefs, pacienteTypeDefs],
  [paisQueries, tipoDocumentoQueries, personaQueries, doctorQueries, pacienteQueries],
  [paisMutations, tipoDocumentoMutations, personaMutations, doctorMutations, pacienteMutations],
);


// Genera el objeto de esquema (schema) a partir de las definiciones de tipos.
export default makeExecutableSchema({
  typeDefs: mergedTypeDefs,
  resolvers: merge(
    { JSON: GraphQLJSON }, // Permite el tipo escalar JSON
    paisResolvers,
    tipoDocumentoResolvers,
    personaResolvers,
    doctorResolvers,
    pacienteResolvers
  ),
});
