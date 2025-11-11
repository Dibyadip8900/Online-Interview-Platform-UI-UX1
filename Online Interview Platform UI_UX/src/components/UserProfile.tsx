import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Mail, MapPin, Briefcase, GraduationCap, Award, Star } from "lucide-react";

export function UserProfile() {
  return (
    <div className="h-full overflow-y-auto p-4 bg-zinc-50">
      <div className="space-y-4">
        {/* Profile Header */}
        <Card className="p-4 bg-white">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl">AK</span>
            </div>
            <div className="flex-1">
              <h3 className="text-zinc-900 mb-1">Alex Kumar</h3>
              <p className="text-sm text-zinc-600 mb-2">Frontend Developer</p>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-600">
                <div className="flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  alex.kumar@email.com
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  San Francisco, CA
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Experience */}
        <Card className="p-4 bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="h-4 w-4 text-zinc-600" />
            <h4 className="text-zinc-900">Experience</h4>
          </div>
          <div className="space-y-3">
            <div>
              <div className="text-sm text-zinc-900">Senior Frontend Developer</div>
              <div className="text-xs text-zinc-600">Tech Corp • 2021 - Present</div>
            </div>
            <Separator />
            <div>
              <div className="text-sm text-zinc-900">Frontend Developer</div>
              <div className="text-xs text-zinc-600">StartupXYZ • 2019 - 2021</div>
            </div>
          </div>
        </Card>

        {/* Education */}
        <Card className="p-4 bg-white">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap className="h-4 w-4 text-zinc-600" />
            <h4 className="text-zinc-900">Education</h4>
          </div>
          <div>
            <div className="text-sm text-zinc-900">B.S. Computer Science</div>
            <div className="text-xs text-zinc-600">Stanford University • 2015 - 2019</div>
            <div className="text-xs text-zinc-600 mt-1">GPA: 3.8/4.0</div>
          </div>
        </Card>

        {/* Skills */}
        <Card className="p-4 bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Award className="h-4 w-4 text-zinc-600" />
            <h4 className="text-zinc-900">Technical Skills</h4>
          </div>
          <div className="space-y-3">
            <div>
              <div className="text-xs text-zinc-600 mb-2">Languages</div>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">Java</Badge>
              </div>
            </div>
            <div>
              <div className="text-xs text-zinc-600 mb-2">Frameworks</div>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">Vue.js</Badge>
              </div>
            </div>
            <div>
              <div className="text-xs text-zinc-600 mb-2">Tools</div>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline">Git</Badge>
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">MongoDB</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Interview Performance */}
        <Card className="p-4 bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Star className="h-4 w-4 text-zinc-600" />
            <h4 className="text-zinc-900">Interview Stats</h4>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-600">Questions Attempted</span>
              <span className="text-zinc-900">1/3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-600">Time Elapsed</span>
              <span className="text-zinc-900">12:34</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-600">Code Executions</span>
              <span className="text-zinc-900">5</span>
            </div>
          </div>
        </Card>

        {/* Additional Notes */}
        <Card className="p-4 bg-white">
          <h4 className="text-zinc-900 mb-2">Interviewer Notes</h4>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Strong communication skills. Good problem-solving approach. Takes time to understand
            the problem before coding.
          </p>
        </Card>
      </div>
    </div>
  );
}
