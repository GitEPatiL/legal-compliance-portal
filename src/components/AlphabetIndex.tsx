"use client";

interface AlphabetIndexProps {
  activeLetter: string | null;
  onSelect: (letter: string | null) => void;
}

const ALPHABET = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function AlphabetIndex({ activeLetter, onSelect }: AlphabetIndexProps) {
  return (
    <div className="flex flex-wrap gap-1 p-4 bg-white border border-gray-200 rounded-xl mb-6">
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${!activeLetter ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
      >
        All
      </button>
      {ALPHABET.map((char) => (
        <button
          key={char}
          onClick={() => onSelect(char)}
          className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded-md transition-all ${activeLetter === char ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          {char}
        </button>
      ))}
    </div>
  );
}
