import dietData from './diet.json'

export type DietTemplateKey = 'standard' | 'training' | 'weekend'

export type DietMeal = {
  name: string
  time: string
  description: string
}

export type DietTemplate = {
  label: string
  macros: DietMacros
  meals: DietMeal[]
}

export type DietDay = {
  day: number
  date: string
  template: DietTemplateKey
  focus: string
  macros: DietMacros
}

export type DietMacros = {
  calories: string
  protein: string
  carbohydrates: string
  fats: string
}

export type DietPlan = {
  title: string
  description: string
  dailyProtocol: string[]
  templates: Record<DietTemplateKey, DietTemplate>
  days: DietDay[]
}

export const dietPlan = dietData as DietPlan
export const dietDays = dietPlan.days
export const dietTemplates = dietPlan.templates

export function getDietDay(day: number) {
  return dietDays.find((item) => item.day === day) ?? dietDays[0]
}

export function getDietTemplate(day: number) {
  const dietDay = getDietDay(day)
  return dietTemplates[dietDay.template]
}
