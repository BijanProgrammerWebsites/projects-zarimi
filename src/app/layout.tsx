import {ReactElement, ReactNode} from 'react';

import type {Metadata} from 'next';
import {Vazirmatn} from 'next/font/google';

import './globals.scss';

const vazirmatn = Vazirmatn({subsets: ['arabic', 'latin', 'latin-ext']});

export const metadata: Metadata = {
    title: 'زریمی',
    description: 'آموزش آشپزی با زهرا کریمی',
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>): ReactElement {
    return (
        <html lang="fa" dir="rtl">
            <body className={vazirmatn.className}>{children}</body>
        </html>
    );
}
