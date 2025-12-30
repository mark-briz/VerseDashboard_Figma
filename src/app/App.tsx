import { useState } from "react";
import { VerseSearch } from "./components/VerseSearch";
import { IdealTranslation } from "./components/IdealTranslation";
import { MultiVersionPanel } from "./components/MultiVersionPanel";
import { ConnectionsPanel } from "./components/ConnectionsPanel";
import { ULPPanel } from "./components/ULPPanel";
import { SRScoreChart } from "./components/SRScoreChart";
import { mockVerses } from "./data/mockData";
import { BookOpen, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

export default function App() {
  const [selectedVerse, setSelectedVerse] = useState<string>("John 3:16");
  
  const verseData = mockVerses[selectedVerse];

  if (!verseData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="size-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Select a verse to begin</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <BookOpen className="size-6 text-white" />
              </div>
              <div>
                <h1>Verse Dashboard</h1>
                <p className="text-sm text-gray-500">
                  Advanced Bible Translation Analysis Platform
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Sparkles className="size-4" />
              <span>Powered by Dynamic Programming & Multi-Engine Connectionism</span>
            </div>
          </div>
          
          <VerseSearch 
            onVerseSelect={setSelectedVerse} 
            currentVerse={selectedVerse}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Current Verse Reference */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border">
            <BookOpen className="size-4 text-blue-600" />
            <span className="text-sm text-gray-600">Viewing:</span>
            <span>{selectedVerse}</span>
          </div>
        </div>

        {/* Ideal Translation */}
        <div className="mb-6">
          <IdealTranslation 
            words={verseData.idealTranslation} 
            reference={selectedVerse}
          />
        </div>

        {/* Tabbed Interface for Detailed Analysis */}
        <Tabs defaultValue="translations" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="translations">Translations</TabsTrigger>
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="scores">SR-Scores</TabsTrigger>
            <TabsTrigger value="ulp">ULP Parser</TabsTrigger>
          </TabsList>

          <TabsContent value="translations" className="mt-6">
            <MultiVersionPanel translations={verseData.translations} />
          </TabsContent>

          <TabsContent value="connections" className="mt-6">
            <ConnectionsPanel connections={verseData.connections} />
          </TabsContent>

          <TabsContent value="scores" className="mt-6">
            <SRScoreChart translations={verseData.translations} />
          </TabsContent>

          <TabsContent value="ulp" className="mt-6">
            <ULPPanel 
              morphology={verseData.morphology} 
              originalText={verseData.originalText}
            />
          </TabsContent>
        </Tabs>

        {/* Feature Overview */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <h3 className="text-sm mb-2">Ideal Translation Engine</h3>
            <p className="text-xs text-gray-600">
              Dynamic programming optimization across candidate spans with agreement, literalness, and morphology scoring.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <h3 className="text-sm mb-2">SR-Score (SRS)</h3>
            <p className="text-xs text-gray-600">
              Profile-aware distance-to-Ideal metric using leave-one-out scoring for defensible rankings.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <h3 className="text-sm mb-2">Connectionism Graph</h3>
            <p className="text-xs text-gray-600">
              Multi-engine linking: lemma overlap, rare n-grams (2-10), construction signatures, curated datasets.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <h3 className="text-sm mb-2">Universal Language Parser</h3>
            <p className="text-xs text-gray-600">
              Grammar for non-grammarians: Who/What/When/Where/How questions instead of paradigm charts.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          <p>Verse Dashboard - Advanced Bible Translation Analysis</p>
          <p className="mt-1 text-xs">
            Utilizing computational linguistics, dynamic programming, and multi-engine connectionism
          </p>
        </div>
      </footer>
    </div>
  );
}
