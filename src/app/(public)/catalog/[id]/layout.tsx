import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    alternates: {
      canonical: `/catalog/${id}`,
    },
  };
}

export default function CatalogProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
