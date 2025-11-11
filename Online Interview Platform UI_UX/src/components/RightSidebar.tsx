import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { QuestionPanel } from "./QuestionPanel";
import { RulesPanel } from "./RulesPanel";
import { UserProfile } from "./UserProfile";
import { FileText, Shield, User } from "lucide-react";

export function RightSidebar() {
  const [activeTab, setActiveTab] = useState<"question" | "rules" | "profile">("question");

  return (
    <div className="w-80 border-l border-zinc-200 bg-white flex flex-col h-full">
      <div className="border-b border-zinc-200 bg-white px-4 py-3">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "question" | "rules" | "profile")}>
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="question" className="gap-1.5">
              <FileText className="h-4 w-4" />
              <span className="hidden lg:inline">Question</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-1.5">
              <User className="h-4 w-4" />
              <span className="hidden lg:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="rules" className="gap-1.5">
              <Shield className="h-4 w-4" />
              <span className="hidden lg:inline">Rules</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex-1 overflow-hidden">
        {activeTab === "question" && <QuestionPanel />}
        {activeTab === "rules" && <RulesPanel />}
        {activeTab === "profile" && <UserProfile />}
      </div>
    </div>
  );
}
