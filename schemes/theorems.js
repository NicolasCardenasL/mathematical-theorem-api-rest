import z from 'zod'
const RequestTheoremSchema = z.object({
    id: z.number().int().positive({
      required_error: 'theorem id is required.',
      invalid_type_error: 'theorem id must be a positive int'
    }),
    author: z.string({
      invalid_type_error: 'author must be an string'
    }).optional(),
    date: z.number().int({
      invalid_type_error: 'date param must be an int'
    }).optional(),
    proven: z.boolean({
      invalid_type_error: 'proven param must be a boolean'
    }).optional(),
    field: z.array(
        z.enum(["Algebra", "Geometry", "Calculus", "Number Theory", "Topology", "Analysis", "Discrete Mathematics",
        "Linear Algebra", "Differential Equations", "Complex Analysis", "Abstract Algebra", "Probability Theory",
        "Statistics", "Game Theory", "Numerical Analysis", "Graph Theory", "Set Theory", "Logic", "Combinatorics",
        "Cryptography", "Dynamical Systems", "Fractal Geometry", "Optimization", "Functional Analysis", "Category Theory",
        "Algebraic Geometry", "Measure Theory", "Chaos Theory", "Knot Theory", "Computational Mathematics"]),
        {invalid_type_error: 'the fields param given is not valid. must be an string an must be in the accepted fields'}
    ).optional()
})

export function validateGetAll (input) {
  return RequestTheoremSchema.partial().safeParse(input)
}

export function validateRequestById (input) {
  return RequestTheoremSchema.safeParse(input)
}