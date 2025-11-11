import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Video, VideoOff, Mic, MicOff, Monitor, PhoneOff, Settings, Flag } from "lucide-react";
import { useState } from "react";

interface InterviewHeaderProps {
  elapsedTime: number;
}

export function InterviewHeader({ elapsedTime }: InterviewHeaderProps) {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <header className="h-16 border-b border-zinc-200 bg-white px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-zinc-700">Recording</span>
        </div>
        <Badge variant="outline" className="text-zinc-700">
          {formatTime(elapsedTime)}
        </Badge>
      </div>

      <div className="flex items-center gap-3">
        <h1 className="text-zinc-900">InterviewPro</h1>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant={isCameraOn ? "outline" : "destructive"}
          size="icon"
          onClick={() => setIsCameraOn(!isCameraOn)}
        >
          {isCameraOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
        </Button>
        <Button
          variant={isMicOn ? "outline" : "destructive"}
          size="icon"
          onClick={() => setIsMicOn(!isMicOn)}
        >
          {isMicOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
        </Button>
        <Button variant="outline" size="icon">
          <Monitor className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
          <Flag className="h-4 w-4 mr-2" />
          Report Issue
        </Button>
        <Button variant="destructive" size="sm" className="ml-2">
          <PhoneOff className="h-4 w-4 mr-2" />
          End Interview
        </Button>
      </div>
    </header>
  );
}