import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Translation } from "../data/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { TrendingUp, Award } from "lucide-react";

interface SRScoreChartProps {
  translations: Translation[];
}

export function SRScoreChart({ translations }: SRScoreChartProps) {
  const data = translations
    .map(t => ({
      name: t.abbreviation,
      score: t.srsScore,
      fullName: t.name
    }))
    .sort((a, b) => b.score - a.score);

  const getColor = (score: number) => {
    if (score >= 0.95) return "#22c55e";
    if (score >= 0.9) return "#84cc16";
    if (score >= 0.85) return "#eab308";
    if (score >= 0.8) return "#f97316";
    return "#ef4444";
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CardTitle>SR-Score Rankings</CardTitle>
            <Badge variant="outline" className="gap-1">
              <TrendingUp className="size-3" />
              Distance-to-Ideal Metric
            </Badge>
          </div>
          <Badge className="bg-amber-500 text-white gap-1">
            <Award className="size-3" />
            Top: {data[0]?.name}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0.6, 1.0]} />
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white p-3 border rounded-lg shadow-lg">
                      <div className="text-sm mb-1">{data.fullName}</div>
                      <div className="font-mono">{data.name}: {data.score.toFixed(3)}</div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="score" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(entry.score)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-1">
              <Award className="size-4 text-green-600" />
              <span className="text-sm">Most Literal</span>
            </div>
            <div className="font-mono">{data[0]?.name} - {data[0]?.score.toFixed(3)}</div>
          </div>
          
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="size-4 text-blue-600" />
              <span className="text-sm">Average Score</span>
            </div>
            <div className="font-mono">
              {(data.reduce((sum, d) => sum + d.score, 0) / data.length).toFixed(3)}
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
          <div className="text-sm">
            <strong>Leave-One-Out Scoring:</strong> Each translation is scored against an Ideal 
            computed without its own contribution, ensuring defensible and unbiased rankings.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
