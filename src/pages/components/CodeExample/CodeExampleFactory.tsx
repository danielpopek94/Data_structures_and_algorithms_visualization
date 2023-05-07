import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Select from 'react-select';
import CopyToClipboardButton from '@/pages/utilities/CopyToClipboardButton';
import linkedlistCode from '@/pages/content/linkedList/code';


const CodeExampleFactory = () => {

    const currentCode = linkedlistCode;
    const { codeJs, codePython } = currentCode;

    const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');

    const languageOptions = [
        { value: codeJs, label: 'JavaScript' },
        { value: codePython, label: 'Python' },
    ];

    const handleLanguageChange = (selectedOption) => {
        setSelectedLanguage(selectedOption.label);
    };

    const selectedCode = selectedLanguage === 'JavaScript' ? codeJs : codePython;

    return (
        <>
            <div className="mb-3">
                <Select
                    value={languageOptions.find((option) => option.label === selectedLanguage)}
                    onChange={handleLanguageChange}
                    options={languageOptions}
                />
            </div>

            <div className='relative'>
                <div className="absolute right-1 top-1">
                    <CopyToClipboardButton toCopy={selectedCode} />
                </div>
            </div>

            <SyntaxHighlighter language={selectedLanguage} showLineNumbers="true">
                {selectedCode}
            </SyntaxHighlighter>
        </>
    );
};

export default CodeExampleFactory;