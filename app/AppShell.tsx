"use client";

import { AppShell as MantineAppShell, Burger, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import {
  IconHome,
  IconUsers,
  IconChevronRight,
  IconShare,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export const AppShell = ({ children }: { children: ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();
  const path = usePathname();

  return (
    <MantineAppShell
      header={{ height: 60 }}
      navbar={{
        width: 200,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <MantineAppShell.Header bg="var(--mantine-color-gray-light)">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </MantineAppShell.Header>

      <MantineAppShell.Navbar>
        <NavLink
          href="/"
          label="Home"
          leftSection={<IconHome size="1rem" stroke={1.5} />}
          rightSection={
            <IconChevronRight
              size="0.8rem"
              stroke={1.5}
              className="mantine-rotate-rtl"
            />
          }
          variant={path === "/" ? "filled" : "subtle"}
          active={path === "/"}
        />
        <NavLink
          href="/users"
          label="Users"
          leftSection={<IconUsers size="1rem" stroke={1.5} />}
          rightSection={
            <IconChevronRight
              size="0.8rem"
              stroke={1.5}
              className="mantine-rotate-rtl"
            />
          }
          variant={path === "/users" ? "filled" : "subtle"}
          active={path === "/users"}
        />
        <NavLink
          href="/posts"
          label="Posts"
          leftSection={<IconShare size="1rem" stroke={1.5} />}
          rightSection={
            <IconChevronRight
              size="0.8rem"
              stroke={1.5}
              className="mantine-rotate-rtl"
            />
          }
          variant={path === "/posts" ? "filled" : "subtle"}
          active={path === "/posts"}
        />
      </MantineAppShell.Navbar>

      <MantineAppShell.Main>{children}</MantineAppShell.Main>
    </MantineAppShell>
  );
};
