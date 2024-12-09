import AppLayout from "@/components/ikon-components/layouts/app-layout";

export default function AppsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppLayout>
        {children}
      </AppLayout>
    </>
  );
}
