import MainContent from "@/components/home/main";
import Sidebar from "@/components/home/sidebar";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

export default function Home() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel collapsible defaultSize={25} minSize={25} maxSize={35}>
        <div className="pr-2">
          <Sidebar />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="pl-2">
          <MainContent />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
