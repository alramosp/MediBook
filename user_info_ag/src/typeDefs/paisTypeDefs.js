export const paisTypeDefs = `
  type Pais {
      id_pais: ID!
      nombre_pais: String!
      indicativo: String!
  }
  input PaisInput {
      nombre_pais: String!
      indicativo: String!
  }`;

export const paisQueries = `
    getPaises: [Pais]!
    getPais(id: ID!): Pais
`;

export const paisMutations = `
  createPais(pais: PaisInput!): Pais
  updatePais(id: ID!, pais: PaisInput!): Pais
  deletePais(id: ID!): ID
`;
