import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, CheckCircle2, Circle } from "lucide-react";
import { Separator } from "./ui/separator";

export function QuestionPanel() {
  const questions = [
    {
      id: 1,
      title: "Reverse a String",
      difficulty: "Easy",
      status: "current",
      timeSpent: "12:34"
    },
    {
      id: 2,
      title: "Binary Tree Traversal",
      difficulty: "Medium",
      status: "pending",
      timeSpent: "00:00"
    },
    {
      id: 3,
      title: "System Design: Chat Application",
      difficulty: "Hard",
      status: "pending",
      timeSpent: "00:00"
    }
  ];

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Question List */}
      <div className="p-4 border-b border-zinc-200 bg-white">
        <h3 className="text-zinc-900 mb-3">Interview Questions</h3>
        <div className="space-y-2">
          {questions.map((q) => (
            <Card
              key={q.id}
              className={`p-3 cursor-pointer transition-all ${
                q.status === "current"
                  ? "border-blue-500 bg-blue-50"
                  : "border-zinc-200 hover:border-zinc-300"
              }`}
            >
              <div className="flex items-start gap-2">
                <div className="mt-1">
                  {q.status === "current" ? (
                    <Circle className="h-4 w-4 text-blue-500 fill-blue-500" />
                  ) : (
                    <Circle className="h-4 w-4 text-zinc-300" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-zinc-900">{q.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={
                        q.difficulty === "Easy"
                          ? "border-green-500 text-green-700"
                          : q.difficulty === "Medium"
                          ? "border-yellow-500 text-yellow-700"
                          : "border-red-500 text-red-700"
                      }
                    >
                      {q.difficulty}
                    </Badge>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {q.timeSpent}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Current Question Details */}
      <div className="flex-1 overflow-y-auto p-4 bg-zinc-50">
        <div className="bg-white rounded-lg border border-zinc-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-zinc-900">Question 1: Reverse a String</h4>
            <Badge className="bg-green-100 text-green-700 border-green-200">Easy</Badge>
          </div>

          <Separator className="my-4" />

          <div className="space-y-4 text-zinc-700">
            <div>
              <h5 className="text-zinc-900 mb-2">Problem Statement</h5>
              <p className="text-sm leading-relaxed">
                Write a function that reverses a string. The input string is given as an array of
                characters. You must do this by modifying the input array in-place with O(1) extra
                memory.
              </p>
            </div>

            <div>
              <h5 className="text-zinc-900 mb-2">Example</h5>
              <div className="bg-zinc-50 rounded p-3 font-mono text-sm">
                <div>
                  <span className="text-zinc-500">Input:</span> ["h","e","l","l","o"]
                </div>
                <div>
                  <span className="text-zinc-500">Output:</span> ["o","l","l","e","h"]
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-zinc-900 mb-2">Constraints</h5>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>1 ≤ s.length ≤ 10⁵</li>
                <li>s[i] is a printable ASCII character</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="mt-4 bg-white rounded-lg border border-zinc-200 p-4">
          <h5 className="text-zinc-900 mb-2">Your Notes</h5>
          <textarea
            className="w-full min-h-24 p-2 text-sm border border-zinc-200 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Take notes here..."
          />
        </div>
      </div>
    </div>
  );
}
