export const tipoDocumentoTypeDefs = `
  type TipoDocumento {
    id_tipo_documento: ID!
    id_pais: ID!
    categoria: String!
  }

  input TipoDocumentoInput {
    id_pais: ID!
    categoria: String!
  }`;

export const tipoDocumentoQueries = `
    getTiposDocumentos: [TipoDocumento]!
    getTipoDocumento(id: ID!): TipoDocumento
  `;

export const tipoDocumentoMutations = `
    createTipoDocumento(tipoDocumento: TipoDocumentoInput!): TipoDocumento
    updateTipoDocumento(id: ID!, tipoDocumento: TipoDocumentoInput!): TipoDocumento
    deleteTipoDocumento(id: ID!): ID
`;