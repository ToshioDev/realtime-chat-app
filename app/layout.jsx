export const dynamic = "force-dynamic";

import "./globals.css";
import Provider from "@providers/Provider";
import { SocketProvider } from "@context/SocketContext";
import { ToasterProvider } from "@providers/toast-provider";
import SocketIndicator from "@components/SocketIndicator";

import localFont from "next/font/local";
import { EdgeStoreProvider } from "@lib/edgestore";
import { siteConfig } from "@config/site";
import { FreeTierNotice } from "@components/free-tier-notice";

export const metadata = {
  title: "Pulse Chat v1.0",
  description: "Pulse Chat v1.0 - Conecta, chatea y comparte en tiempo real.",
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: [
        {
            url: "/logo.svg",
            href: "/logo.svg",
        },
    ],
};

const font = localFont({
    src: "../public/fonts/charlie-display-3.ttf",
});

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body
                className={`min-h-screen transition-colors duration-150 ease-linear ${font.className}}`}
            >
                <EdgeStoreProvider>
                    <Provider>
                        <SocketProvider>
                            <ToasterProvider />
                            <SocketIndicator />

                            {/* This is just to showcase that project is hosted on free tiers and may take time to wake up */}
                            <FreeTierNotice />

{/* Header removido en pantallas de login y registro */}

<main className="relative h-screen flex-center py-8 px-4 md:p-8 bg-main">
    {children}
</main>

<footer className="w-full text-center py-4 bg-gray-900 text-gray-400 text-sm">
    © 2025 Pulse Chat v1.0 — Conecta, chatea y comparte en tiempo real.
</footer>
                        </SocketProvider>
                    </Provider>
                </EdgeStoreProvider>
            </body>
        </html>
    );
};

export default RootLayout;
