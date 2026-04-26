// exercisedb.ts
import { ExerciseOption } from '@/types/exercise'

export function normalizeExercise(exercise: any): ExerciseOption | null {
  if (
    typeof exercise?.exerciseId !== 'string' ||
    typeof exercise?.name !== 'string'
  ) {
    return null
  }

  return {
    exerciseId: exercise.exerciseId,
    name: exercise.name,
    gifUrl: typeof exercise.gifUrl === 'string' ? exercise.gifUrl : null,
    targetMuscles: Array.isArray(exercise.targetMuscles)
      ? exercise.targetMuscles
      : [],
    bodyParts: Array.isArray(exercise.bodyParts)
      ? exercise.bodyParts
      : [],
    equipments: Array.isArray(exercise.equipments)
      ? exercise.equipments
      : [],
  }
}

export function normalizeExercises(data: any): ExerciseOption[] {
  if (!Array.isArray(data)) {
    console.log('hey!')
    return []
  }

  return data
    .map(normalizeExercise)
    .filter((exercise): exercise is ExerciseOption => exercise !== null)
}

export async function searchExercises(query: string): Promise<ExerciseOption[]> {
  const trimmedQuery = query.trim()

  if (!trimmedQuery) {
    return []
  }

  try {
    const res = await fetch(
      `https://oss.exercisedb.dev/api/v1/exercises?name=${encodeURIComponent(trimmedQuery)}`
    )

    if (!res.ok) {
      console.error('ExerciseDB request failed:', res.status)
      return []
    }

    const result = await res.json()

    return normalizeExercises(result.data).slice(0, 20)
  } catch (error) {
    console.error('ExerciseDB search failed:', error)
    return []
  }
}