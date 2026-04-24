import { ExerciseOption } from '@/types/exercise'
import {
  CreateExerciseSetInput,
  CreateWorkoutExerciseInput,
  CreateWorkoutInput,
} from '@/types/workout'

export function createWorkoutInput(
  userId: string,
  name: string
): CreateWorkoutInput {
  return {
    userId,
    name: name.trim(),
  }
}

export function createWorkoutExerciseInput(
  exercise: ExerciseOption,
  workoutId: string
): CreateWorkoutExerciseInput {
  return {
    workoutId,
    name: exercise.name,
  }
}

export function createExerciseSetInput(
  input: CreateExerciseSetInput
): Required<CreateExerciseSetInput> {
  return {
    workoutExerciseId: input.workoutExerciseId,
    setNumber: input.setNumber,
    reps: input.reps ?? null,
    weight: input.weight ?? null,
    isRecord: input.isRecord ?? false,
  }
}
