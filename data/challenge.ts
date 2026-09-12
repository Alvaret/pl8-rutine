import challengeData from './challenge.json'

export type Activity = { title: string; detail: string; meta?: string; kind: 'walk' | 'mobility' | 'strength' | 'reading' | 'sleep' | 'work' | 'food' }

export type ChallengeDay = { day: number; date: string; phase: string; title: string; intro: string; goal: string; steps: string; activities: Activity[]; exercises?: { name: string; reps: string }[]; reflection?: string[] }

export const challengeStart = '2026-09-14T00:00:00'

export const challengeDays = challengeData as ChallengeDay[]
export const challengeTotalDays = challengeDays.length
export const challengeEnd = new Date(new Date(challengeStart).getTime() + challengeTotalDays * 86400000)

export function getChallengeDay(date = new Date()) { const start = new Date(challengeStart); const today = new Date(date.getFullYear(), date.getMonth(), date.getDate()); const first = new Date(start.getFullYear(), start.getMonth(), start.getDate()); const diff = Math.floor((today.getTime() - first.getTime()) / 86400000); return Math.min(challengeTotalDays, Math.max(1, diff + 1)) }
export function getDayState(day: number, currentDay: number) { return day < currentDay ? 'done' : day === currentDay ? 'current' : 'upcoming' }

export const phaseColors: Record<string, string> = { Comenzar: 'mint', Activar: 'blue', Caminar: 'amber', Avanzar: 'coral', Recuperar: 'lavender', Cerrar: 'rose' }

export function formatToday(date = new Date()) { return new Intl.DateTimeFormat('es-ES', { weekday: 'long', day: 'numeric', month: 'long' }).format(date) }

export function getChallengeStatus(date = new Date()) { const start = new Date(challengeStart); if (date < start) return 'Aún no empieza'; if (date >= challengeEnd) return 'Reto completado'; return 'En curso' }

export function getIconKind(kind: Activity['kind']) { return kind }

export const defaultExercises = challengeDays[2].exercises!