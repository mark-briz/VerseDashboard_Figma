import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MorphologyData } from "../data/mockData";
import { HelpCircle, User, Package, Clock, MapPin, Zap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface ULPPanelProps {
  morphology: MorphologyData[];
  originalText: string;
}

export function ULPPanel({ morphology, originalText }: ULPPanelProps) {
  const questionIcons = {
    who: User,
    what: Package,
    when: Clock,
    where: MapPin,
    how: Zap
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CardTitle>Universal Language Parser (ULP)</CardTitle>
            <Badge variant="outline" className="gap-1">
              <HelpCircle className="size-3" />
              Grammar for Non-Grammarians
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="questions" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="questions">Question Framework</TabsTrigger>
            <TabsTrigger value="original">Original Text</TabsTrigger>
          </TabsList>
          
          <TabsContent value="questions" className="space-y-3 mt-4">
            {morphology.map((word, idx) => (
              <div key={idx} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-lg font-mono">{word.word}</span>
                    <span className="text-sm text-gray-500 ml-2">({word.transliteration})</span>
                  </div>
                  <Badge variant="secondary">{word.lemma}</Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {word.who && (
                    <div className="flex items-start gap-2 p-2 bg-blue-50 rounded">
                      <User className="size-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <strong className="text-blue-900">Who?</strong>
                        <div className="text-gray-700">{word.who}</div>
                      </div>
                    </div>
                  )}
                  
                  {word.what && (
                    <div className="flex items-start gap-2 p-2 bg-green-50 rounded">
                      <Package className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <strong className="text-green-900">What?</strong>
                        <div className="text-gray-700">{word.what}</div>
                      </div>
                    </div>
                  )}
                  
                  {word.when && (
                    <div className="flex items-start gap-2 p-2 bg-purple-50 rounded">
                      <Clock className="size-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <strong className="text-purple-900">When?</strong>
                        <div className="text-gray-700">{word.when}</div>
                      </div>
                    </div>
                  )}
                  
                  {word.where && (
                    <div className="flex items-start gap-2 p-2 bg-orange-50 rounded">
                      <MapPin className="size-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <strong className="text-orange-900">Where?</strong>
                        <div className="text-gray-700">{word.where}</div>
                      </div>
                    </div>
                  )}
                  
                  {word.how && (
                    <div className="flex items-start gap-2 p-2 bg-yellow-50 rounded">
                      <Zap className="size-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <strong className="text-yellow-900">How?</strong>
                        <div className="text-gray-700">{word.how}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-sm">
                <strong>ULP Approach:</strong> Rather than memorizing paradigm charts, ULP asks 
                "Who/What/When/Where/How" and shows where the morphology encodes those answers.
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="original" className="mt-4">
            <div className="p-4 bg-gray-50 rounded-lg border">
              <div className="text-sm text-gray-600 mb-2">Greek/Hebrew Original:</div>
              <p className="text-lg leading-relaxed" dir="auto">
                {originalText}
              </p>
            </div>
            
            <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-2">
              <div className="flex items-center gap-2 p-2 bg-blue-50 rounded text-xs">
                <User className="size-4 text-blue-600" />
                <span>Who</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded text-xs">
                <Package className="size-4 text-green-600" />
                <span>What</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-purple-50 rounded text-xs">
                <Clock className="size-4 text-purple-600" />
                <span>When</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-orange-50 rounded text-xs">
                <MapPin className="size-4 text-orange-600" />
                <span>Where</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded text-xs">
                <Zap className="size-4 text-yellow-600" />
                <span>How</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
