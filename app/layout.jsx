'use client';

import { store } from '@/store';
import { Provider } from 'react-redux';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
