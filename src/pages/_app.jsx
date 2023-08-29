import AppContext from '@context/AppContext'
import useInitialState from '@hooks/useInitialState'
import '@styles/globals.css'

// Providers
// Context
// Layout
// Additional props

export default function MyApp ({ Component, pageProps }) {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
