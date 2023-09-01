import { useTheme } from 'next-themes'
import { saira } from '../../font'
import React from 'react'

const ThemeProviderChild = ({children}) => {
    const {theme} = useTheme()
  return (
    <body className={saira.className} data-theme={theme}>
        {children}
    </body>

  )

}

export default ThemeProviderChild