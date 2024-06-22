import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { AppStore, setupStore, type RootState } from '@/redux/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {}
) {
  const {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  )
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions })
  }
}