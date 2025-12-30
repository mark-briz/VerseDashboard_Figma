// Mock data for the Verse Dashboard

export interface Translation {
  id: string;
  name: string;
  abbreviation: string;
  text: string;
  srsScore: number;
}

export interface IdealWord {
  word: string;
  sources: string[];
  agreementScore: number;
  literalnessScore: number;
  morphologyFaithfulness: number;
  tooltip: string;
}

export interface Connection {
  reference: string;
  rank: number;
  score: number;
  evidence: string[];
  explanation: string;
  verseText: string;
}

export interface MorphologyData {
  word: string;
  transliteration: string;
  lemma: string;
  who?: string;
  what?: string;
  when?: string;
  where?: string;
  how?: string;
}

export interface VerseData {
  reference: string;
  originalText: string;
  idealTranslation: IdealWord[];
  translations: Translation[];
  connections: Connection[];
  morphology: MorphologyData[];
}

export const mockVerses: Record<string, VerseData> = {
  "John 3:16": {
    reference: "John 3:16",
    originalText: "Οὕτως γὰρ ἠγάπησεν ὁ θεὸς τὸν κόσμον, ὥστε τὸν υἱὸν τὸν μονογενῆ ἔδωκεν, ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόληται ἀλλ' ἔχῃ ζωὴν αἰώνιον.",
    idealTranslation: [
      { word: "For", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.95, literalnessScore: 0.9, morphologyFaithfulness: 0.88, tooltip: "γὰρ - causal conjunction" },
      { word: "God", sources: ["ESV", "NIV", "NASB", "KJV"], agreementScore: 1.0, literalnessScore: 1.0, morphologyFaithfulness: 1.0, tooltip: "θεὸς - nominative singular" },
      { word: "loved", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.98, literalnessScore: 0.95, morphologyFaithfulness: 0.92, tooltip: "ἠγάπησεν - aorist active indicative" },
      { word: "the", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.92, literalnessScore: 0.85, morphologyFaithfulness: 0.9, tooltip: "τὸν - accusative singular" },
      { word: "world", sources: ["ESV", "NIV", "NASB", "KJV"], agreementScore: 1.0, literalnessScore: 1.0, morphologyFaithfulness: 1.0, tooltip: "κόσμον - accusative singular" },
      { word: "in this way", sources: ["NIV", "NASB"], agreementScore: 0.75, literalnessScore: 0.82, morphologyFaithfulness: 0.78, tooltip: "Οὕτως - adverb of manner" },
      { word: "that", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.93, literalnessScore: 0.88, morphologyFaithfulness: 0.85, tooltip: "ὥστε - consecutive conjunction" },
      { word: "he gave", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.97, literalnessScore: 0.94, morphologyFaithfulness: 0.91, tooltip: "ἔδωκεν - aorist active indicative" },
      { word: "his", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.9, literalnessScore: 0.87, morphologyFaithfulness: 0.85, tooltip: "implied possessive" },
      { word: "only", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.96, literalnessScore: 0.93, morphologyFaithfulness: 0.9, tooltip: "μονογενῆ - unique, one-of-a-kind" },
      { word: "Son", sources: ["ESV", "NIV", "NASB", "KJV"], agreementScore: 1.0, literalnessScore: 1.0, morphologyFaithfulness: 1.0, tooltip: "υἱὸν - accusative singular" },
      { word: "so that", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.94, literalnessScore: 0.9, morphologyFaithfulness: 0.88, tooltip: "ἵνα - purpose clause" },
      { word: "everyone", sources: ["ESV", "NIV"], agreementScore: 0.88, literalnessScore: 0.84, morphologyFaithfulness: 0.82, tooltip: "πᾶς - nominative singular" },
      { word: "who believes", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.95, literalnessScore: 0.92, morphologyFaithfulness: 0.89, tooltip: "πιστεύων - present active participle" },
      { word: "in", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.97, literalnessScore: 0.95, morphologyFaithfulness: 0.93, tooltip: "εἰς - preposition of direction" },
      { word: "him", sources: ["ESV", "NIV", "NASB", "KJV"], agreementScore: 1.0, literalnessScore: 1.0, morphologyFaithfulness: 1.0, tooltip: "αὐτὸν - accusative singular pronoun" },
      { word: "should not", sources: ["ESV", "NIV"], agreementScore: 0.91, literalnessScore: 0.88, morphologyFaithfulness: 0.86, tooltip: "μὴ - negative particle in purpose clause" },
      { word: "perish", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.96, literalnessScore: 0.93, morphologyFaithfulness: 0.9, tooltip: "ἀπόληται - aorist middle subjunctive" },
      { word: "but", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.98, literalnessScore: 0.95, morphologyFaithfulness: 0.92, tooltip: "ἀλλ' - adversative conjunction" },
      { word: "have", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.97, literalnessScore: 0.94, morphologyFaithfulness: 0.91, tooltip: "ἔχῃ - present active subjunctive" },
      { word: "eternal", sources: ["ESV", "NIV", "NASB", "KJV"], agreementScore: 1.0, literalnessScore: 1.0, morphologyFaithfulness: 1.0, tooltip: "αἰώνιον - accusative singular adjective" },
      { word: "life", sources: ["ESV", "NIV", "NASB", "KJV"], agreementScore: 1.0, literalnessScore: 1.0, morphologyFaithfulness: 1.0, tooltip: "ζωὴν - accusative singular" },
    ],
    translations: [
      {
        id: "esv",
        name: "English Standard Version",
        abbreviation: "ESV",
        text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
        srsScore: 0.94
      },
      {
        id: "niv",
        name: "New International Version",
        abbreviation: "NIV",
        text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        srsScore: 0.91
      },
      {
        id: "nasb",
        name: "New American Standard Bible",
        abbreviation: "NASB",
        text: "For God so loved the world, that He gave His only begotten Son, that whoever believes in Him shall not perish, but have eternal life.",
        srsScore: 0.96
      },
      {
        id: "kjv",
        name: "King James Version",
        abbreviation: "KJV",
        text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
        srsScore: 0.87
      },
      {
        id: "nlt",
        name: "New Living Translation",
        abbreviation: "NLT",
        text: "For this is how God loved the world: He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life.",
        srsScore: 0.82
      },
      {
        id: "msg",
        name: "The Message",
        abbreviation: "MSG",
        text: "This is how much God loved the world: He gave his Son, his one and only Son. And this is why: so that no one need be destroyed; by believing in him, anyone can have a whole and lasting life.",
        srsScore: 0.68
      }
    ],
    connections: [
      {
        reference: "1 John 4:9",
        rank: 1,
        score: 0.92,
        evidence: ["μονογενῆ υἱὸν (only Son)", "rare lemma bigram", "theological parallel"],
        explanation: "Shares the unique phrase 'only Son' and develops the theme of God's love through giving.",
        verseText: "In this the love of God was made manifest among us, that God sent his only Son into the world..."
      },
      {
        reference: "Romans 5:8",
        rank: 2,
        score: 0.89,
        evidence: ["ἀγάπη concept", "giving/sending pattern", "salvation purpose"],
        explanation: "Parallel structure showing God's love demonstrated through Christ's sacrifice.",
        verseText: "But God shows his love for us in that while we were still sinners, Christ died for us."
      },
      {
        reference: "John 3:36",
        rank: 3,
        score: 0.87,
        evidence: ["πιστεύων (believing)", "ζωὴν αἰώνιον (eternal life)", "same discourse"],
        explanation: "Immediate context developing belief and eternal life themes.",
        verseText: "Whoever believes in the Son has eternal life; whoever does not obey the Son shall not see life..."
      },
      {
        reference: "Ephesians 2:4-5",
        rank: 4,
        score: 0.84,
        evidence: ["love + grace construction", "life from death theme", "ἀγάπη root"],
        explanation: "Similar theological structure: God's love → gracious action → spiritual life.",
        verseText: "But God, being rich in mercy, because of the great love with which he loved us..."
      },
      {
        reference: "Titus 3:4-5",
        rank: 5,
        score: 0.81,
        evidence: ["salvation theme", "divine initiative", "ἀγάπη concept"],
        explanation: "God's love as the motivation for salvation, not human works.",
        verseText: "But when the goodness and loving kindness of God our Savior appeared, he saved us..."
      }
    ],
    morphology: [
      {
        word: "Οὕτως",
        transliteration: "houtōs",
        lemma: "οὕτω",
        how: "in this manner/way",
        tooltip: "Adverb pointing to the manner or extent of God's love"
      },
      {
        word: "γὰρ",
        transliteration: "gar",
        lemma: "γάρ",
        how: "causally/explanatory",
        tooltip: "Conjunction explaining or providing reason"
      },
      {
        word: "ἠγάπησεν",
        transliteration: "ēgapēsen",
        lemma: "ἀγαπάω",
        who: "God (3rd singular)",
        what: "loved",
        when: "aorist (point action in past)",
        how: "actively"
      },
      {
        word: "θεὸς",
        transliteration: "theos",
        lemma: "θεός",
        who: "God",
        what: "subject performing the action"
      },
      {
        word: "κόσμον",
        transliteration: "kosmon",
        lemma: "κόσμος",
        what: "world (direct object)",
        who: "the ordered creation/humanity"
      },
      {
        word: "υἱὸν",
        transliteration: "huion",
        lemma: "υἱός",
        who: "Son",
        what: "direct object of 'gave'"
      },
      {
        word: "μονογενῆ",
        transliteration: "monogenē",
        lemma: "μονογενής",
        what: "only/unique one",
        how: "modifies 'Son'"
      },
      {
        word: "πιστεύων",
        transliteration: "pisteuōn",
        lemma: "πιστεύω",
        who: "everyone (participle)",
        what: "believing",
        when: "present (continuous action)",
        how: "actively"
      },
      {
        word: "ζωὴν",
        transliteration: "zōēn",
        lemma: "ζωή",
        what: "life (direct object)"
      },
      {
        word: "αἰώνιον",
        transliteration: "aiōnion",
        lemma: "αἰώνιος",
        what: "eternal/everlasting",
        how: "modifies 'life'"
      }
    ]
  },
  "Romans 8:28": {
    reference: "Romans 8:28",
    originalText: "οἴδαμεν δὲ ὅτι τοῖς ἀγαπῶσιν τὸν θεὸν πάντα συνεργεῖ εἰς ἀγαθόν, τοῖς κατὰ πρόθεσιν κλητοῖς οὖσιν.",
    idealTranslation: [
      { word: "And", sources: ["ESV", "NASB"], agreementScore: 0.88, literalnessScore: 0.85, morphologyFaithfulness: 0.82, tooltip: "δὲ - continuative particle" },
      { word: "we know", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.97, literalnessScore: 0.94, morphologyFaithfulness: 0.91, tooltip: "οἴδαμεν - perfect active indicative" },
      { word: "that", sources: ["ESV", "NIV", "NASB", "KJV"], agreementScore: 1.0, literalnessScore: 1.0, morphologyFaithfulness: 1.0, tooltip: "ὅτι - conjunction" },
      { word: "for those", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.94, literalnessScore: 0.91, morphologyFaithfulness: 0.89, tooltip: "τοῖς - dative plural article" },
      { word: "who love", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.96, literalnessScore: 0.93, morphologyFaithfulness: 0.9, tooltip: "ἀγαπῶσιν - present active participle" },
      { word: "God", sources: ["ESV", "NIV", "NASB", "KJV"], agreementScore: 1.0, literalnessScore: 1.0, morphologyFaithfulness: 1.0, tooltip: "θεὸν - accusative singular" },
      { word: "all things", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.95, literalnessScore: 0.92, morphologyFaithfulness: 0.89, tooltip: "πάντα - nominative/accusative neuter plural" },
      { word: "work together", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.93, literalnessScore: 0.9, morphologyFaithfulness: 0.87, tooltip: "συνεργεῖ - present active indicative" },
      { word: "for", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.96, literalnessScore: 0.93, morphologyFaithfulness: 0.91, tooltip: "εἰς - preposition" },
      { word: "good", sources: ["ESV", "NIV", "NASB", "KJV"], agreementScore: 1.0, literalnessScore: 1.0, morphologyFaithfulness: 1.0, tooltip: "ἀγαθόν - accusative neuter singular" },
      { word: "for those", sources: ["ESV", "NIV"], agreementScore: 0.89, literalnessScore: 0.86, morphologyFaithfulness: 0.84, tooltip: "τοῖς - dative plural article (repeated)" },
      { word: "who are called", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.94, literalnessScore: 0.91, morphologyFaithfulness: 0.88, tooltip: "κλητοῖς - dative plural adjective" },
      { word: "according to", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.95, literalnessScore: 0.92, morphologyFaithfulness: 0.9, tooltip: "κατὰ - preposition with accusative" },
      { word: "his purpose", sources: ["ESV", "NIV", "NASB"], agreementScore: 0.97, literalnessScore: 0.94, morphologyFaithfulness: 0.92, tooltip: "πρόθεσιν - accusative singular" }
    ],
    translations: [
      {
        id: "esv",
        name: "English Standard Version",
        abbreviation: "ESV",
        text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.",
        srsScore: 0.95
      },
      {
        id: "niv",
        name: "New International Version",
        abbreviation: "NIV",
        text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
        srsScore: 0.92
      },
      {
        id: "nasb",
        name: "New American Standard Bible",
        abbreviation: "NASB",
        text: "And we know that God causes all things to work together for good to those who love God, to those who are called according to His purpose.",
        srsScore: 0.93
      },
      {
        id: "kjv",
        name: "King James Version",
        abbreviation: "KJV",
        text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
        srsScore: 0.89
      },
      {
        id: "nlt",
        name: "New Living Translation",
        abbreviation: "NLT",
        text: "And we know that God causes everything to work together for the good of those who love God and are called according to his purpose for them.",
        srsScore: 0.84
      }
    ],
    connections: [
      {
        reference: "Romans 8:29-30",
        rank: 1,
        score: 0.95,
        evidence: ["immediate context", "πρόθεσιν (purpose)", "κλητοῖς (called)"],
        explanation: "Directly continues the thought, explaining God's purpose and calling.",
        verseText: "For those whom he foreknew he also predestined... and those whom he predestined he also called..."
      },
      {
        reference: "Ephesians 1:11",
        rank: 2,
        score: 0.88,
        evidence: ["πρόθεσιν (purpose)", "divine sovereignty theme", "working all things"],
        explanation: "Parallel teaching on God's purpose working all things according to his will.",
        verseText: "In him we have obtained an inheritance, having been predestined according to the purpose of him who works all things..."
      },
      {
        reference: "Philippians 1:6",
        rank: 3,
        score: 0.82,
        evidence: ["good work theme", "divine faithfulness", "completion guarantee"],
        explanation: "God's faithfulness to complete the good work he began.",
        verseText: "And I am sure of this, that he who began a good work in you will bring it to completion..."
      },
      {
        reference: "Genesis 50:20",
        rank: 4,
        score: 0.79,
        evidence: ["good from evil theme", "divine sovereignty"],
        explanation: "Classic OT example of God working bad circumstances for good purposes.",
        verseText: "As for you, you meant evil against me, but God meant it for good..."
      }
    ],
    morphology: [
      {
        word: "οἴδαμεν",
        transliteration: "oidamen",
        lemma: "οἶδα",
        who: "we",
        what: "know",
        when: "perfect (current state of knowing)",
        how: "actively"
      },
      {
        word: "ἀγαπῶσιν",
        transliteration: "agapōsin",
        lemma: "ἀγαπάω",
        who: "those (plural)",
        what: "love",
        when: "present (continuous)",
        how: "actively"
      },
      {
        word: "συνεργεῖ",
        transliteration: "synergei",
        lemma: "συνεργέω",
        what: "work together",
        when: "present (ongoing)",
        how: "cooperatively"
      },
      {
        word: "κλητοῖς",
        transliteration: "klētois",
        lemma: "κλητός",
        who: "the called ones",
        what: "verbal adjective describing believers"
      }
    ]
  }
};

export const searchVerses = (query: string): string[] => {
  const lowerQuery = query.toLowerCase();
  const allRefs = Object.keys(mockVerses);
  
  if (!query) return allRefs;
  
  return allRefs.filter(ref => 
    ref.toLowerCase().includes(lowerQuery) ||
    mockVerses[ref].idealTranslation.map(w => w.word).join(' ').toLowerCase().includes(lowerQuery)
  );
};
