import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { IdealWord } from "../data/mockData";
import { Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface IdealTranslationProps {
  words: IdealWord[];
  reference: string;
}

export function IdealTranslation({ words, reference }: IdealTranslationProps) {
  const getScoreColor = (score: number) => {
    if (score >= 0.95) return "bg-green-500";
    if (score >= 0.9) return "bg-green-400";
    if (score >= 0.85) return "bg-yellow-400";
    if (score >= 0.8) return "bg-orange-400";
    return "bg-red-400";
  };

  const overallScore = (
    words.reduce((sum, w) => sum + w.agreementScore, 0) / words.length
  ).toFixed(3);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CardTitle>Ideal Translation</CardTitle>
            <Badge variant="outline" className="gap-1">
              <Info className="size-3" />
              Optimized via Dynamic Programming
            </Badge>
          </div>
          <Badge className={`${getScoreColor(parseFloat(overallScore))} text-white`}>
            Agreement: {overallScore}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="flex flex-wrap gap-2 items-start">
            {words.map((word, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <span
                    className="relative cursor-pointer px-2 py-1 rounded hover:bg-gray-100 transition-colors"
                    style={{
                      borderBottom: `3px solid`,
                      borderBottomColor: word.agreementScore >= 0.95 ? '#22c55e' :
                                       word.agreementScore >= 0.9 ? '#84cc16' :
                                       word.agreementScore >= 0.85 ? '#eab308' :
                                       word.agreementScore >= 0.8 ? '#f97316' : '#ef4444'
                    }}
                  >
                    {word.word}
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <div className="space-y-2">
                    <div>
                      <strong>{word.tooltip}</strong>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        Agreement: <span className="font-mono">{word.agreementScore.toFixed(2)}</span>
                      </div>
                      <div>
                        Literalness: <span className="font-mono">{word.literalnessScore.toFixed(2)}</span>
                      </div>
                      <div className="col-span-2">
                        Morphology: <span className="font-mono">{word.morphologyFaithfulness.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">
                      Sources: {word.sources.join(", ")}
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
        
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-2">Score Legend:</div>
          <div className="flex flex-wrap gap-3 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span>0.95+ Excellent</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-400 rounded"></div>
              <span>0.90-0.94 Very Good</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-yellow-400 rounded"></div>
              <span>0.85-0.89 Good</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-orange-400 rounded"></div>
              <span>0.80-0.84 Fair</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-red-400 rounded"></div>
              <span>&lt;0.80 Needs Review</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
