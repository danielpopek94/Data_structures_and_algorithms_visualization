import { Button, Snackbar } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';

const CopyToClipboardButton = ({ toCopy }) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(true)
        navigator.clipboard.writeText(toCopy)
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

export default CopyToClipboardButton;