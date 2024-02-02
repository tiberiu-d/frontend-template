import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

export default function Home() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel collapsible defaultSize={25} minSize={25} maxSize={35}>
        <div className="pr-2">panel 1</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="pl-2">panel 2</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
