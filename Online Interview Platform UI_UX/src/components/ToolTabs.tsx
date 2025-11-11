import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Code2, PenTool } from "lucide-react";

interface ToolTabsProps {
  activeTab: "code" | "whiteboard";
  onTabChange: (tab: "code" | "whiteboard") => void;
}

export function ToolTabs({ activeTab, onTabChange }: ToolTabsProps) {
  return (
    <div className="border-b border-zinc-200 bg-white px-4 py-2">
      <Tabs value={activeTab} onValueChange={(value) => onTabChange(value as "code" | "whiteboard")}>
        <TabsList>
          <TabsTrigger value="code" className="gap-2">
            <Code2 className="h-4 w-4" />
            Code Editor
          </TabsTrigger>
          <TabsTrigger value="whiteboard" className="gap-2">
            <PenTool className="h-4 w-4" />
            Whiteboard
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
