export const personaTypeDefs = `
  type Persona {
      id_persona: ID!
      id_tipo_documento: ID!
      numero_documento: String!
      nombre: String!
      apellido: String!
      fecha_nacimiento: String!
      email: String!
      telefono: String!
      rol: String!
  }
  input PersonaInput {
      id_tipo_documento: ID!
      numero_documento: String!
      nombre: String!
      apellido: String!
      fecha_nacimiento: String!
      email: String!
      telefono: String!
      rol: String!
  }`;

export const personaQueries = `
    getPersonas: [Persona]!
    getPersona(id: ID!): Persona      
  `;

export const personaMutations = `
  createPersona(persona: PersonaInput!): Persona
  updatePersona(id: ID!, persona: PersonaInput!): Persona
  deletePersona(id: ID!): ID
  `;
