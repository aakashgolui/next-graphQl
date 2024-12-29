import { Breadcrumbs as MantineBreadcrumbs, Anchor, Card } from "@mantine/core";

interface BreadcrumbItem {
  title: string;
  href: string;
}

export function Breadcrumbs({ links }: { links: BreadcrumbItem[] }) {
  const items = links?.map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <Card>
      <MantineBreadcrumbs>{items}</MantineBreadcrumbs>
    </Card>
  );
}
