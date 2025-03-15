"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
<<<<<<< HEAD

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
=======
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
>>>>>>> 0a6fd216f0cc829c3c1646266f03aab4c5d93a5a
