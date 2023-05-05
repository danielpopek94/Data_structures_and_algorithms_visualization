import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Select from 'react-select';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CodeExampleFactory = () => {
    const codeJs = `const list = {
        head: {
            value: 6
            next: {
                value: 10                                             
                next: {
                    value: 12
                    next: {
                        value: 3
                        next: null	
                        }
                    }
                }
            }
        }
    };`;
    const codePython = `linked_list = {
        "head": {
            "value": 6,
            "next": {
                "value": 10,
                "next": {
                    "value": 12,
                    "next": {
                        "value": 3,
                        "next": None
                    }
                }
            }
        }
    }
    `
    const [selectedLanguage, setSelectedLanguage] = useState('javascript');

    const languageOptions = [
        { value: 'javascript', label: 'JavaScript' },
        { value: 'python', label: 'Python' },
        // Dodaj więcej opcji języków, jeśli potrzebujesz
    ];

    const handleLanguageChange = (selectedOption) => {
        setSelectedLanguage(selectedOption.value);
    };

    return (
        <>
            <div className="mb-3">
                <Select

                    value={languageOptions.find((option) => option.value === selectedLanguage)}
                    onChange={handleLanguageChange}
                    options={languageOptions}
                />
            </div>

            <div className='relative'>
                <div className="absolute right-1 top-1">
                    <CopyToClipboardButton />
                </div>
            </div>

            <SyntaxHighlighter language={selectedLanguage} showLineNumbers="true">
                {selectedLanguage === 'javascript' ? codeJs : codePython}
            </SyntaxHighlighter>
        </>
    );
};

export default CodeExampleFactory;




import { Button, Snackbar } from '@mui/material'

const CopyToClipboardButton = () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(true)
        navigator.clipboard.writeText(window.location.toString())
    }

    return (
        <>
            <Button onClick={handleClick}>
                <ContentCopyIcon />
                Copy
            </Button>
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message="Copied to clipboard"
            />
        </>
    )
}
