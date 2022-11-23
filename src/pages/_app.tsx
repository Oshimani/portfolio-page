import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import "../styles/effects.scss";
import "../styles/pages/showcase/fancy-form.scss";

import Navigation from "../components/Navigation";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>

      {/* BACKGROUND IMAGE AND DARKNESS FILTER */}
      <div className="h-screen w-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(/background.jpg)` }}>
        <div className="absolute inset-0 backdrop-brightness-[0.4]">

          {/* MAIN */}
          <main className="container mx-auto">
            
            {/* NAVIGATION */}
            <Navigation />

            {/* PAGE CONTENT */}
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
