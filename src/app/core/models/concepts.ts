interface ConceptRequired {
  operation: string;
  description: string;
  value: number;
}

interface ConceptOptionals{
  percentage: number;
}

export type concept = Required<ConceptRequired> & Partial<ConceptOptionals>
