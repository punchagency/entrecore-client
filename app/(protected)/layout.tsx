import PageHeader from "@/components/page-header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-[#F0F4FF] p-3">
        <SidebarTrigger className="transform -translate-x-5 z-[10000]" />
        <PageHeader />
        <div className="w-full mt-2">{children}</div>
      </main>
    </SidebarProvider>
  );
}
