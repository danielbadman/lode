import { useColorScheme } from '@/hooks/use-color-scheme'

const appThemes = {
  light: {
    isDark: false,
    statusBar: 'dark' as const,
    background: '#f8fafc',
    surface: '#ffffff',
    surfaceMuted: '#f8fafc',
    surfaceStrong: '#0f172a',
    border: '#e2e8f0',
    borderMuted: '#cbd5e1',
    text: '#0f172a',
    textMuted: '#475569',
    textSoft: '#64748b',
    placeholder: '#94a3b8',
    badge: '#e2e8f0',
    badgeText: '#334155',
    activity: '#0f172a',
    primaryButton: '#0f172a',
    primaryButtonDisabled: '#94a3b8',
    primaryButtonText: '#ffffff',
    secondaryButton: '#e2e8f0',
    secondaryButtonText: '#334155',
    dangerButton: '#ef4444',
  },
  dark: {
    isDark: true,
    statusBar: 'light' as const,
    background: '#020617',
    surface: '#0f172a',
    surfaceMuted: '#111827',
    surfaceStrong: '#e2e8f0',
    border: '#1e293b',
    borderMuted: '#334155',
    text: '#f8fafc',
    textMuted: '#cbd5e1',
    textSoft: '#94a3b8',
    placeholder: '#64748b',
    badge: '#1e293b',
    badgeText: '#e2e8f0',
    activity: '#e2e8f0',
    primaryButton: '#e2e8f0',
    primaryButtonDisabled: '#475569',
    primaryButtonText: '#0f172a',
    secondaryButton: '#1e293b',
    secondaryButtonText: '#e2e8f0',
    dangerButton: '#dc2626',
  },
}

export function useAppTheme() {
  const colorScheme = useColorScheme()
  return appThemes[colorScheme === 'dark' ? 'dark' : 'light']
}
