import { ExerciseDbExercise, ExerciseOption } from '@/types/exercise'

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function toStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return []
  }

  return value.filter((item): item is string => typeof item === 'string')
}

export function normalizeExercise(exercise: unknown): ExerciseOption | null {
  if (!isRecord(exercise)) {
    return null
  }

  const exerciseId = exercise.exerciseId
  const name = exercise.name
  const gifUrl = exercise.gifUrl

  if (
    typeof exerciseId !== 'string' ||
    typeof name !== 'string' ||
    typeof gifUrl !== 'string'
  ) {
    return null
  }

  return {
    exerciseId,
    name,
    gifUrl,
    targetMuscles: toStringArray(exercise.targetMuscles),
    bodyParts: toStringArray(exercise.bodyParts),
    equipments: toStringArray(exercise.equipments),
  }
}

export function normalizeExercises(data: unknown): ExerciseOption[] {
  if (!Array.isArray(data)) {
    return []
  }

  return data
    .map(normalizeExercise)
    .filter((exercise): exercise is ExerciseOption => exercise !== null)
}

export type { ExerciseDbExercise }
