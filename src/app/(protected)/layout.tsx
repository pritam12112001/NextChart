import MainLayout from "@/components/ikon-components/layouts/main-layout";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainLayout>
        {children}
      </MainLayout>
    </>
  );
}
