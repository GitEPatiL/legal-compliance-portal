import React from 'react';
import { BlockProps } from '@/types/page';

const TableBlock: React.FC<BlockProps> = ({ content }) => {
  const { heading, headers, rows } = content as any;

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {heading && <h2 className="text-3xl font-bold mb-8 text-gray-900">{heading}</h2>}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            {headers && (
              <thead className="bg-gray-50">
                <tr>
                  {headers.map((header: string, i: number) => (
                    <th key={i} className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {rows?.map((row: string[], i: number) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  {row.map((cell, j) => (
                    <td key={j} className="px-6 py-4 text-sm text-gray-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TableBlock;
