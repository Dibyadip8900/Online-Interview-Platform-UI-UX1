import { AlertCircle, CheckCircle, XCircle, Info } from "lucide-react";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

export function RulesPanel() {
  return (
    <div className="h-full overflow-y-auto p-4 bg-zinc-50">
      <div className="space-y-4">
        {/* Interview Guidelines */}
        <Card className="p-4 border-blue-200 bg-blue-50">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-blue-900 mb-2">Interview Guidelines</h4>
              <p className="text-sm text-blue-800 leading-relaxed">
                This is a technical interview session. Please follow the rules below to ensure a
                smooth interview process.
              </p>
            </div>
          </div>
        </Card>

        {/* Do's */}
        <div className="bg-white rounded-lg border border-zinc-200 p-4">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <h4 className="text-zinc-900">Do's</h4>
          </div>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Think out loud and explain your thought process clearly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Ask clarifying questions if something is unclear</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Test your code with different test cases</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Discuss time and space complexity of your solutions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Keep your camera and microphone on throughout the interview</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Stay in a quiet, well-lit environment</span>
            </li>
          </ul>
        </div>

        {/* Don'ts */}
        <div className="bg-white rounded-lg border border-zinc-200 p-4">
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="h-5 w-5 text-red-600" />
            <h4 className="text-zinc-900">Don&apos;ts</h4>
          </div>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>Do not use external resources, websites, or documentation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>Do not have anyone else in the room or helping you</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>Do not copy-paste code from external sources</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>Do not switch tabs or leave the interview window</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>Do not use your phone during the interview</span>
            </li>
          </ul>
        </div>

        {/* Important Information */}
        <div className="bg-white rounded-lg border border-zinc-200 p-4">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <h4 className="text-zinc-900">Important Information</h4>
          </div>
          <div className="space-y-3 text-sm text-zinc-700">
            <div>
              <span className="text-zinc-900">Duration:</span> 60 minutes
            </div>
            <div>
              <span className="text-zinc-900">Questions:</span> 3 problems (Easy, Medium, Hard)
            </div>
            <div>
              <span className="text-zinc-900">Recording:</span> This session is being recorded
            </div>
            <div>
              <span className="text-zinc-900">Evaluation Criteria:</span>
              <ul className="mt-2 ml-4 space-y-1 list-disc">
                <li>Problem-solving approach</li>
                <li>Code quality and organization</li>
                <li>Communication skills</li>
                <li>Time complexity analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* System Check */}
        <div className="bg-white rounded-lg border border-zinc-200 p-4">
          <h4 className="text-zinc-900 mb-3">System Status</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-700">Camera</span>
              <Badge className="bg-green-100 text-green-700 border-green-200">Active</Badge>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-700">Microphone</span>
              <Badge className="bg-green-100 text-green-700 border-green-200">Active</Badge>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-700">Connection</span>
              <Badge className="bg-green-100 text-green-700 border-green-200">Stable</Badge>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-700">Screen Share</span>
              <Badge variant="outline" className="text-zinc-600">Ready</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
