// workout.ts
export type Workout = {
  id: string
  userId: string
  name: string
  createdAt: string
}

export type CreateWorkoutInput = {
  userId: string
  name: string
}

export type WorkoutExercise = {
  id: string
  workoutId: string

  // core identity
  exerciseId: string   // ← from ExerciseDB
  name: string

  // useful metadata
  bodyPart: string
  target: string
  equipment: string
  gifUrl: string | null

  createdAt: string
}

export type CreateWorkoutExerciseInput = {
  workoutId: string
  name: string
  exerciseId: string
  bodyPart: string
  target: string
  equipment: string
  gifUrl: string | null
}

export type ExerciseSet = {
  id: string
  workoutExerciseId: string
  setNumber: number
  reps: number | null
  weight: number | null
  isRecord: boolean
  createdAt: string
}

export type CreateExerciseSetInput = {
  workoutExerciseId: string
  setNumber: number
  reps?: number | null
  weight?: number | null
  isRecord?: boolean
}
