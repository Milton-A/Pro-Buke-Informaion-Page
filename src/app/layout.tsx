import '../styles/global.css';
import { ReactNode } from 'react';

export default function RootLayout({ children, }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Pro Buke</title>
      </head>
      <body className='bg-slate-200'>{children}</body>
    </html>
  )
}
