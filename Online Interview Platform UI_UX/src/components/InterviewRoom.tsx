import { useState, useEffect } from "react";
import { VideoPanel } from "./VideoPanel";
import { CodeEditor } from "./CodeEditor";
import { Whiteboard } from "./Whiteboard";
import { InterviewHeader } from "./InterviewHeader";
import { RightSidebar } from "./RightSidebar";
import { ChatSpace } from "./ChatSpace";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { ToolTabs } from "./ToolTabs";
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Code, 
  Pencil, 
  FileQuestion, 
  MessageSquare, 
  MoreVertical,
  PhoneOff,
  Monitor,
  Settings,
  Flag,
  Users,
  BookOpen,
  Home,
  Maximize2
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { QuestionPanel } from "./QuestionPanel";
import { RulesPanel } from "./RulesPanel";
import { UserProfile } from "./UserProfile";

export function InterviewRoom() {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [viewMode, setViewMode] = useState<"split" | "fullscreen">("split");
  const [activeTab, setActiveTab] = useState<"code" | "whiteboard">("code");

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const closePanel = () => setActivePanel(null);

  // Split-screen layout (original version 7)
  if (viewMode === "split") {
    return (
      <div className="h-full flex flex-col bg-zinc-50">
        <InterviewHeader elapsedTime={elapsedTime} />
        
        <div className="flex-1 flex overflow-hidden">
          {/* Video Panel - Left Sidebar */}
          <div className="w-64 border-r border-zinc-200 bg-white flex flex-col">
            <div className="flex-1 overflow-hidden min-h-0">
              <VideoPanel isCameraOn={isCameraOn} layout="split" />
            </div>
            <div className="h-56 border-t border-zinc-200">
              <ChatSpace />
            </div>
            <div className="h-8"></div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            <ToolTabs activeTab={activeTab} onTabChange={setActiveTab} />
            
            <div className="flex-1 overflow-hidden">
              {activeTab === "code" ? <CodeEditor /> : <Whiteboard />}
            </div>
          </div>

          {/* Right Sidebar - Questions, Rules, Profile */}
          <RightSidebar />
        </div>

        {/* Floating Fullscreen Button */}
        <div className="absolute bottom-8 right-8 z-20">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  className="h-12 w-12 rounded-full shadow-xl bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setViewMode("fullscreen")}
                >
                  <Maximize2 className="h-6 w-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Enter Fullscreen Video Mode</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    );
  }

  // Fullscreen video mode
  return (
    <div className="h-full flex flex-col bg-black relative">
      {/* Full-Screen Video Area */}
      <VideoPanel isCameraOn={isCameraOn} layout="fullscreen" />

      {/* Top Bar - Recording Status and Time */}
      <div className="absolute top-6 left-6 flex items-center gap-4 z-10">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-white text-sm">Recording</span>
        </div>
        <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
          {formatTime(elapsedTime)}
        </div>
      </div>

      {/* Top Right - InterviewPro Logo */}
      <div className="absolute top-6 right-6 z-10">
        <div className="bg-black/60 backdrop-blur-sm px-5 py-2 rounded-full">
          <span className="text-white">InterviewPro</span>
        </div>
      </div>

      {/* Floating Control Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-zinc-900/95 backdrop-blur-md rounded-full px-6 py-4 shadow-2xl border border-zinc-700">
          <div className="flex items-center gap-3">
            {/* Home Button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-zinc-700 text-white"
                    onClick={() => setViewMode("split")}
                  >
                    <Home className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Exit Fullscreen Mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="w-px h-8 bg-zinc-700" />

            {/* Video Toggle */}
            <Button
              variant={isCameraOn ? "ghost" : "destructive"}
              size="icon"
              className={isCameraOn ? "hover:bg-zinc-700 text-white" : ""}
              onClick={() => setIsCameraOn(!isCameraOn)}
            >
              {isCameraOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
            </Button>

            {/* Mic Toggle */}
            <Button
              variant={isMicOn ? "ghost" : "destructive"}
              size="icon"
              className={isMicOn ? "hover:bg-zinc-700 text-white" : ""}
              onClick={() => setIsMicOn(!isMicOn)}
            >
              {isMicOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
            </Button>

            <div className="w-px h-8 bg-zinc-700" />

            {/* Tool Icons */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-zinc-700 text-white"
              onClick={() => setActivePanel("code")}
            >
              <Code className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-zinc-700 text-white"
              onClick={() => setActivePanel("whiteboard")}
            >
              <Pencil className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-zinc-700 text-white"
              onClick={() => setActivePanel("questions")}
            >
              <FileQuestion className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-zinc-700 text-white"
              onClick={() => setActivePanel("chat")}
            >
              <MessageSquare className="h-5 w-5" />
            </Button>

            <div className="w-px h-8 bg-zinc-700" />

            {/* More Options Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-zinc-700 text-white"
                >
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mb-2">
                <DropdownMenuItem onClick={() => setActivePanel("profile")}>
                  <Users className="mr-2 h-4 w-4" />
                  Candidate Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActivePanel("rules")}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Interview Guidelines
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Monitor className="mr-2 h-4 w-4" />
                  Share Screen
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-orange-600">
                  <Flag className="mr-2 h-4 w-4" />
                  Report Issue
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  <PhoneOff className="mr-2 h-4 w-4" />
                  End Interview
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Code Editor Panel */}
      <Sheet open={activePanel === "code"} onOpenChange={(open) => !open && closePanel()}>
        <SheetContent side="right" className="w-full sm:max-w-4xl p-0" aria-describedby={undefined}>
          <SheetHeader className="px-6 py-4 border-b">
            <SheetTitle>Code Editor</SheetTitle>
          </SheetHeader>
          <div className="h-[calc(100vh-73px)]">
            <CodeEditor />
          </div>
        </SheetContent>
      </Sheet>

      {/* Whiteboard Panel */}
      <Sheet open={activePanel === "whiteboard"} onOpenChange={(open) => !open && closePanel()}>
        <SheetContent side="right" className="w-full sm:max-w-4xl p-0" aria-describedby={undefined}>
          <SheetHeader className="px-6 py-4 border-b">
            <SheetTitle>Whiteboard</SheetTitle>
          </SheetHeader>
          <div className="h-[calc(100vh-73px)]">
            <Whiteboard />
          </div>
        </SheetContent>
      </Sheet>

      {/* Questions Panel */}
      <Sheet open={activePanel === "questions"} onOpenChange={(open) => !open && closePanel()}>
        <SheetContent side="right" className="w-full sm:max-w-2xl" aria-describedby={undefined}>
          <SheetHeader className="mb-4">
            <SheetTitle>Interview Questions</SheetTitle>
          </SheetHeader>
          <QuestionPanel />
        </SheetContent>
      </Sheet>

      {/* Chat Panel */}
      <Sheet open={activePanel === "chat"} onOpenChange={(open) => !open && closePanel()}>
        <SheetContent side="right" className="w-full sm:max-w-md p-0" aria-describedby={undefined}>
          <SheetHeader className="px-6 py-4 border-b">
            <SheetTitle>Chat</SheetTitle>
          </SheetHeader>
          <div className="h-[calc(100vh-73px)]">
            <ChatSpace />
          </div>
        </SheetContent>
      </Sheet>

      {/* Profile Panel */}
      <Sheet open={activePanel === "profile"} onOpenChange={(open) => !open && closePanel()}>
        <SheetContent side="right" className="w-full sm:max-w-md" aria-describedby={undefined}>
          <SheetHeader className="mb-4">
            <SheetTitle>Candidate Profile</SheetTitle>
          </SheetHeader>
          <UserProfile />
        </SheetContent>
      </Sheet>

      {/* Rules Panel */}
      <Sheet open={activePanel === "rules"} onOpenChange={(open) => !open && closePanel()}>
        <SheetContent side="right" className="w-full sm:max-w-md" aria-describedby={undefined}>
          <SheetHeader className="mb-4">
            <SheetTitle>Interview Guidelines</SheetTitle>
          </SheetHeader>
          <RulesPanel />
        </SheetContent>
      </Sheet>
    </div>
  );
}