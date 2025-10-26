import React from 'react';

interface HtmlEditorProps {
  value: string;
  onChange: (newValue: string) => void;
  height?: string;
}

const HtmlEditor: React.FC<HtmlEditorProps> = ({ value, onChange, height = '300px' }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 rounded-lg p-2 mt-1">
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">HTML Code</label>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 font-mono text-sm shadow-sm focus:ring-primary focus:border-primary resize-y"
          style={{ height }}
          spellCheck="false"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Live Preview</label>
        <div
          className="prose max-w-none w-full h-full border border-gray-300 rounded-md p-2 bg-gray-50 overflow-y-auto"
          style={{ height }}
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div>
    </div>
  );
};

export default HtmlEditor;
