// exercise.ts
export type ExerciseDbExercise = {
  exerciseId: string
  name: string
  gifUrl: string | null
  targetMuscles: string[]
  bodyParts: string[]
  equipments: string[]
  secondaryMuscles: string[]
  instructions: string[]
}

export type ExerciseOption = {
  exerciseId: string
  name: string
  gifUrl: string | null
  targetMuscles: string[]
  bodyParts: string[]
  equipments: string[]
}
