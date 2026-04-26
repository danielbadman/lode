// workoutServices.ts

import { ExerciseOption } from '@/types/exercise'
import {
    CreateExerciseSetInput,
    CreateWorkoutExerciseInput,
    CreateWorkoutInput,
} from '@/types/workout'

function getPrimaryValue(values: string[]): string {
  return values[0] ?? ''
}

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
    exerciseId: exercise.exerciseId,
    name: exercise.name,
    bodyPart: getPrimaryValue(exercise.bodyParts),
    target: getPrimaryValue(exercise.targetMuscles),
    equipment: getPrimaryValue(exercise.equipments),
    gifUrl: exercise.gifUrl,
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
