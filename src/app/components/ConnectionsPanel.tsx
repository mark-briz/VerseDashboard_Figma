import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Connection } from "../data/mockData";
import { Network, ExternalLink, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

interface ConnectionsPanelProps {
  connections: Connection[];
}

export function ConnectionsPanel({ connections }: ConnectionsPanelProps) {
  const getRankColor = (rank: number) => {
    if (rank === 1) return "bg-amber-500";
    if (rank === 2) return "bg-gray-400";
    if (rank === 3) return "bg-orange-600";
    return "bg-blue-500";
  };

  const getScoreColor = (score: number) => {
    if (score >= 0.9) return "text-green-600";
    if (score >= 0.85) return "text-green-500";
    if (score >= 0.8) return "text-yellow-600";
    return "text-orange-600";
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CardTitle>Connections</CardTitle>
            <Badge variant="outline" className="gap-1">
              <Network className="size-3" />
              Connectionism Graph
            </Badge>
          </div>
          <Badge className="bg-purple-600 text-white gap-1">
            <Sparkles className="size-3" />
            Multi-Engine Ranked
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {connections.map((connection) => (
            <AccordionItem key={connection.reference} value={connection.reference}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 w-full">
                  <Badge className={`${getRankColor(connection.rank)} text-white min-w-[60px]`}>
                    #{connection.rank}
                  </Badge>
                  <div className="flex items-center gap-2 flex-1">
                    <span>{connection.reference}</span>
                    <ExternalLink className="size-3 text-gray-400" />
                  </div>
                  <span className={`font-mono text-sm ${getScoreColor(connection.score)}`}>
                    {connection.score.toFixed(2)}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-2">
                  <div className="p-3 bg-gray-50 rounded border-l-4 border-blue-500">
                    <p className="text-sm italic text-gray-700">"{connection.verseText}"</p>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Connection Explanation:</div>
                    <p className="text-sm">{connection.explanation}</p>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-500 mb-2">Evidence (Multi-Engine):</div>
                    <div className="flex flex-wrap gap-2">
                      {connection.evidence.map((evidence, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {evidence}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
          <div className="flex items-start gap-2">
            <Network className="size-5 text-purple-600 mt-0.5" />
            <div className="text-xs">
              <strong>Connectionism Engines:</strong> Lemma/root overlap • Rare lemma n-grams (2-10) • 
              Construction signatures • Curated theological datasets
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
