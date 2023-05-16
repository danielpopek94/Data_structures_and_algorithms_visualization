import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Select from 'react-select';
import CopyToClipboardButton from '@/pages/utilities/CopyToClipboardButton';
import getCodeExample from '@/pages/utilities/Routing/getCodeExample';


const CodeExampleFactory = () => {

    const currentCode = getCodeExample();
    const { python, js } = currentCode;

    const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');

    const languageOptions = [
        { value: js, label: 'JavaScript' },
        { value: python, label: 'Python' },
    ];

    const handleLanguageChange = (selectedOption) => {
        console.log(selectedOption);
        setSelectedLanguage(selectedOption.label);
    };

    const selectedCode = selectedLanguage === 'JavaScript' ? js : python;

    return (
        <div className='max-w-2xl'>
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
        </div>
    );
};

export default CodeExampleFactory;