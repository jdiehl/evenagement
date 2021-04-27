import format from 'date-fns/format'
import { de, enUS } from 'date-fns/locale'

function locale(): any {
  switch (navigator ?? navigator.language) {
    case 'de-DE': return de
    default: return enUS
  }
}

export function formatDateTime(date: Date): string {
  return format(date, 'P – p', { locale: locale() })
}
