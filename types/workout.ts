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
  name: string
  createdAt: string
}

export type CreateWorkoutExerciseInput = {
  workoutId: string
  name: string
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
