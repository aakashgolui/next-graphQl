import { Breadcrumbs as MantineBreadcrumbs, Anchor, Card } from "@mantine/core";

interface BreadcrumbItem {
  title: string;
  href: string;
}

export function Breadcrumbs({ links }: { links: BreadcrumbItem[] }) {
  const items = links?.map((item, index) => (
    <Anchor href={item.href} key={index} className="font-medium">
      {item.title}
    </Anchor>
  ));

  return (
    <div className=" p-3 bottom-2 border-b-2">
      <MantineBreadcrumbs>{items}</MantineBreadcrumbs>
    </div>
  );
}
