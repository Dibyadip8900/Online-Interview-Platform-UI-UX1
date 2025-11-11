import { useState } from "react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Play, RotateCcw, Copy, Check } from "lucide-react";
import { Textarea } from "./ui/textarea";

export function CodeEditor() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(`// Write your code here
function reverseString(str) {
  // Your implementation
  return str;
}

// Test cases
console.log(reverseString("hello")); // Expected: "olleh"
`);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full flex flex-col bg-zinc-900">
      {/* Editor Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
        <div className="flex items-center gap-3">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-40 bg-zinc-900 border-zinc-700 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-zinc-400 text-sm">Problem: Reverse String</span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-zinc-300 hover:text-white" onClick={handleCopy}>
            {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
            {copied ? "Copied!" : "Copy"}
          </Button>
          <Button variant="ghost" size="sm" className="text-zinc-300 hover:text-white">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <Play className="h-4 w-4 mr-2" />
            Run Code
          </Button>
        </div>
      </div>

      {/* Code Editor Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 relative min-h-0">
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="absolute inset-0 w-full h-full font-mono text-sm bg-zinc-900 text-zinc-100 border-0 rounded-none resize-none focus-visible:ring-0 focus-visible:ring-offset-0 p-4"
            style={{ 
              tabSize: 2,
              lineHeight: "1.6"
            }}
            spellCheck={false}
          />
          {/* Line Numbers */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-zinc-950 border-r border-zinc-800 flex flex-col p-4 text-zinc-500 text-sm font-mono pointer-events-none">
            {code.split('\n').map((_, i) => (
              <div key={i} className="h-[1.6em] text-right pr-2">
                {i + 1}
              </div>
            ))}
          </div>
          <div className="pl-12"></div>
        </div>

        {/* Output Panel */}
        <div className="h-40 border-t border-zinc-700 bg-zinc-950 flex flex-col">
          <div className="px-3 py-2 border-b border-zinc-700">
            <span className="text-zinc-300 text-sm">Output</span>
          </div>
          <div className="flex-1 p-3 overflow-auto font-mono text-sm text-zinc-300">
            <div className="text-green-400">{">"} Ready to run</div>
            <div className="text-zinc-500 mt-2">Click &quot;Run Code&quot; to see output</div>
          </div>
        </div>
      </div>
    </div>
  );
}