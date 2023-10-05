export const doctorTypeDefs = `
  type Doctor {
    id_doctor: ID!
    id_persona: ID!
    especialidad: String!
    jornada: String!
  }

  input DoctorInput {
    id_persona: ID!
    especialidad: String!
    jornada: String!
  }`;

  export const doctorQueries = `
    getDoctores: [Doctor]!
    getDoctor(id: ID!): Doctor
  `;

  export const doctorMutations = `
    createDoctor(doctor: DoctorInput!): Doctor
    updateDoctor(id: ID!, doctor: DoctorInput!): Doctor
    deleteDoctor(id: ID!): ID
`;