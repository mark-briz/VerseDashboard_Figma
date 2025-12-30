import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { searchVerses } from "../data/mockData";

interface VerseSearchProps {
  onVerseSelect: (reference: string) => void;
  currentVerse?: string;
}

export function VerseSearch({ onVerseSelect, currentVerse }: VerseSearchProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const results = searchVerses(searchQuery);

  return (
    <div className="w-full max-w-2xl">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input
              placeholder="Search for a verse or phrase (e.g., John 3:16, love, eternal life)..."
              value={currentVerse || searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              className="pl-10"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[600px] p-0" align="start">
          <Command>
            <CommandInput 
              placeholder="Search verses..." 
              value={searchQuery}
              onValueChange={setSearchQuery}
            />
            <CommandList>
              <CommandEmpty>No verses found.</CommandEmpty>
              <CommandGroup heading="Verses">
                {results.map((reference) => (
                  <CommandItem
                    key={reference}
                    onSelect={() => {
                      onVerseSelect(reference);
                      setOpen(false);
                      setSearchQuery("");
                    }}
                  >
                    {reference}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
