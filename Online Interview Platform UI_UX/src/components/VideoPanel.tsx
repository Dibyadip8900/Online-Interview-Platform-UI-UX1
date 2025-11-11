import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { User } from "lucide-react";

interface VideoPanelProps {
  isCameraOn: boolean;
  layout?: "split" | "fullscreen";
}

export function VideoPanel({ isCameraOn, layout = "fullscreen" }: VideoPanelProps) {
  // Split-screen layout (original vertical card layout)
  if (layout === "split") {
    return (
      <div className="flex-1 flex flex-col p-3 gap-3 overflow-y-auto h-full">
        {/* Interviewer Video */}
        <Card className="relative overflow-hidden rounded-lg border-2 border-zinc-200 shadow-sm">
          <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center relative">
            {/* Simulated Video Feed */}
            {isCameraOn ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-zinc-800 flex items-center justify-center mb-2">
                    <User className="w-8 h-8 text-zinc-600" />
                  </div>
                  <p className="text-white text-xs">Camera Off</p>
                </div>
              </div>
            )}

            {/* Name Badge */}
            <div className="absolute bottom-3 left-3">
              <Badge className="bg-black/60 text-white border-none">
                Sarah Johnson (Interviewer)
              </Badge>
            </div>

            {/* Connection Status */}
            <div className="absolute top-3 left-3">
              <div className="flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded text-xs">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                <span>Connected</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Candidate Video (You) */}
        <Card className="relative overflow-hidden rounded-lg border-2 border-blue-500 shadow-sm">
          <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center relative">
            {/* Simulated Video Feed */}
            {isCameraOn ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-slate-500 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-zinc-800 flex items-center justify-center mb-2">
                    <User className="w-8 h-8 text-zinc-600" />
                  </div>
                  <p className="text-white text-xs">Camera Off</p>
                </div>
              </div>
            )}

            {/* Name Badge */}
            <div className="absolute bottom-3 left-3">
              <Badge className="bg-blue-600 text-white border-none">
                You (Candidate)
              </Badge>
            </div>

            {/* Connection Status */}
            <div className="absolute top-3 left-3">
              <div className="flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded text-xs">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                <span>Connected</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Connection Info */}
        <div className="px-2 py-2 bg-zinc-100 rounded-lg border border-zinc-200">
          <div className="text-xs text-zinc-600 space-y-0.5">
            <div className="flex justify-between">
              <span>Network:</span>
              <span className="text-green-600">Excellent</span>
            </div>
            <div className="flex justify-between">
              <span>Latency:</span>
              <span className="text-zinc-900">32ms</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fullscreen layout (side-by-side)
  return (
    <div className="absolute inset-0 grid grid-cols-2 gap-4 p-4">
      {/* Interviewer Video - Left Half */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-zinc-700 shadow-2xl">
        <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center relative">
          {/* Simulated Video Feed */}
          {isCameraOn ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                  <User className="w-16 h-16 text-zinc-600" />
                </div>
                <p className="text-white text-lg">Camera Off</p>
              </div>
            </div>
          )}

          {/* Name Badge */}
          <div className="absolute bottom-6 left-6">
            <Badge className="bg-black/60 text-white border-none px-4 py-2 text-sm backdrop-blur-sm">
              Sarah Johnson (Interviewer)
            </Badge>
          </div>

          {/* Connection Status */}
          <div className="absolute top-6 left-6">
            <div className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-full text-sm backdrop-blur-sm">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span>Connected</span>
            </div>
          </div>
        </div>
      </div>

      {/* Candidate Video (You) - Right Half */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-blue-500 shadow-2xl">
        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center relative">
          {/* Simulated Video Feed */}
          {isCameraOn ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-slate-500 flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                  <User className="w-16 h-16 text-zinc-600" />
                </div>
                <p className="text-white text-lg">Camera Off</p>
              </div>
            </div>
          )}

          {/* Name Badge */}
          <div className="absolute bottom-6 left-6">
            <Badge className="bg-blue-600 text-white border-none px-4 py-2 text-sm backdrop-blur-sm">
              You (Candidate)
            </Badge>
          </div>

          {/* Connection Status */}
          <div className="absolute top-6 left-6">
            <div className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-full text-sm backdrop-blur-sm">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span>Connected</span>
            </div>
          </div>
        </div>
      </div>

      {/* Network Info - Bottom Right Corner */}
      <div className="absolute bottom-24 right-6 z-10">
        <div className="px-4 py-3 bg-black/60 backdrop-blur-sm rounded-xl border border-zinc-700">
          <div className="text-xs text-white space-y-1">
            <div className="flex items-center justify-between gap-4">
              <span className="text-zinc-300">Network:</span>
              <span className="text-green-400">Excellent</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-zinc-300">Latency:</span>
              <span className="text-white">32ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}