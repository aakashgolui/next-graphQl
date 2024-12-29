import "@mantine/core/styles.css";
import {
  MantineProvider as MyMantineProvider,
  createTheme,
} from "@mantine/core";
import { ReactNode } from "react";

const theme = createTheme({});

export function MantineProvider({ children }: { children: ReactNode }) {
  return <MyMantineProvider theme={theme}>{children}</MyMantineProvider>;
}
