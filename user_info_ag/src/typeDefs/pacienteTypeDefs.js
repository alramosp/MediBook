export const pacienteTypeDefs = `
  type Paciente {
    id_paciente: ID!
    id_persona: ID!
    historia_clinica: String!
  }

  input PacienteInput {
    id_persona: ID!
    historia_clinica: String!
  }`;

  export const pacienteQueries = `
    getPacientes: [Paciente]!
    getPaciente(id: ID!): Paciente
  }`;

  export const pacienteMutations = `
    createPaciente(input: PacienteInput!): Paciente
    updatePaciente(id: ID!, input: PacienteInput!): Paciente
    deletePaciente(id: ID!): ID
  }
`;