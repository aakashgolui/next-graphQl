import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { MyApolloProvider } from "./ApolloProvider";
import { MantineProvider } from "./MantineProvider";
import { AppShell } from "./AppShell";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NEXT GRAPHQL",
  description:
    "Elevate your wellness journey with 10X Health System&#039;s advanced gene testing, IV therapy, and more for peak well-being.",
};

function LocaleLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <MantineProvider>
          <MyApolloProvider>
            <AppShell>{children}</AppShell>
          </MyApolloProvider>
        </MantineProvider>
      </body>
    </html>
  );
}

export default LocaleLayout;
