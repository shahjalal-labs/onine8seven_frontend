import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    alternates: {
      canonical: `/catalog/bar-equipment/${id}`,
    },
  };
}

export default function BarEquipmentProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
