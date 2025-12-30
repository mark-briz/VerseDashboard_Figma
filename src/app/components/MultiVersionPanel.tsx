import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Translation } from "../data/mockData";
import { ArrowUpDown, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface MultiVersionPanelProps {
  translations: Translation[];
}

export function MultiVersionPanel({ translations }: MultiVersionPanelProps) {
  const [sortBy, setSortBy] = useState<"srs" | "name">("srs");
  
  const getSRSColor = (score: number) => {
    if (score >= 0.95) return "bg-green-500";
    if (score >= 0.9) return "bg-green-400";
    if (score >= 0.85) return "bg-yellow-400";
    if (score >= 0.8) return "bg-orange-400";
    return "bg-red-400";
  };

  const sortedTranslations = [...translations].sort((a, b) => {
    if (sortBy === "srs") {
      return b.srsScore - a.srsScore;
    }
    return a.abbreviation.localeCompare(b.abbreviation);
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CardTitle>Multi-Version Comparison</CardTitle>
            <Badge variant="outline">{translations.length} Translations</Badge>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setSortBy(sortBy === "srs" ? "name" : "srs")}
            className="gap-2"
          >
            <ArrowUpDown className="size-4" />
            Sort by {sortBy === "srs" ? "Name" : "SR-Score"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {sortedTranslations.map((translation) => (
          <div key={translation.id} className="border-l-4 pl-4 py-2" style={{
            borderLeftColor: translation.srsScore >= 0.95 ? '#22c55e' :
                           translation.srsScore >= 0.9 ? '#84cc16' :
                           translation.srsScore >= 0.85 ? '#eab308' :
                           translation.srsScore >= 0.8 ? '#f97316' : '#ef4444'
          }}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-mono">{translation.abbreviation}</span>
                <span className="text-sm text-gray-500">({translation.name})</span>
              </div>
              <Badge className={`${getSRSColor(translation.srsScore)} text-white gap-1`}>
                <TrendingUp className="size-3" />
                SRS: {translation.srsScore.toFixed(2)}
              </Badge>
            </div>
            <p className="text-gray-700">{translation.text}</p>
          </div>
        ))}
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start gap-2">
            <TrendingUp className="size-5 text-blue-600 mt-0.5" />
            <div>
              <div className="text-sm">
                <strong>SR-Score (SRS)</strong> measures distance-to-Ideal using leave-one-out scoring.
              </div>
              <div className="text-xs text-gray-600 mt-1">
                Each translation is scored against an Ideal computed without its contribution, ensuring unbiased ranking.
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
