import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import VisualizationFactory from './VisualizationFactory';
import { LinkedListVisualization } from '@/pages/content/linkedList/visualization';
import { Typography } from '@mui/material';

const steps = LinkedListVisualization;

export default function Steps() {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const currentStep = steps[activeStep];

    return (
        <Box>
            <Box>
                <VisualizationFactory
                    nodesRows={currentStep.nodes}
                    comment={currentStep.comment}
                    addDataNode={currentStep.addDataNode}
                    nodeSize={currentStep.nodeSize}
                />
            </Box>
            <Typography>{currentStep.description}</Typography>
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="bottom"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        Previous
                    </Button>
                }
            />
        </Box>
    );
}