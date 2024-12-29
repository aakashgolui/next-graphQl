"use client";

import { client } from "@/utils";
import { ApolloProvider } from "@apollo/client";

import { ReactNode } from "react";

export function MyApolloProvider({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
