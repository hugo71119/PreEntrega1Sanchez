import AppTienda from './AppTienda'
import { TiendaProvider } from './context/TiendaProvider'

export default function App() {

  return (
    <TiendaProvider>
      <AppTienda/>
    </TiendaProvider>
  )
}
