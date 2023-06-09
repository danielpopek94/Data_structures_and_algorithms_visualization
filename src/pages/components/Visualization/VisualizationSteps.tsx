import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import VisualizationFactory from './VisualizationFactory';
import { Typography } from '@mui/material';
import getVisualizationSteps from '@/pages/utilities/Routing/getVisualizationSteps';
import Step from '@/types/Step';


export default function VisualizationSteps() {
    const steps: Step[] = getVisualizationSteps();

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps?.length || 0;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleGoToFirstStep = () => {
        setActiveStep(0);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        console.log(event);
        switch (event.key) {
            case 'ArrowLeft':
                activeStep > 0 && handleBack();
                break;
            case 'ArrowRight':
                activeStep < maxSteps - 1 && handleNext();
                break;
            default:
                break;
        }
    };

    const currentStep: Step = steps[activeStep];

    return (
        <Box sx={{ height: '80vh', position: 'relative', maxWidth: '500px', margin: '0 auto' }}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            <Box>
                <VisualizationFactory
                    nodesRows={currentStep.nodes}
                    comment={currentStep.comment}
                    nodeSize={currentStep.nodeSize}
                    orientation={currentStep.orientation}
                    frame={currentStep.frame}
                />
            </Box>
            <Typography>{`Current step:${currentStep.id}
            ${currentStep.description}`}</Typography>
            <MobileStepper
                variant="progress"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0
                }}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                    </Button>
                }
                backButton={
                    <>
                        <Button
                            size="small"
                            onClick={handleGoToFirstStep}
                            disabled={activeStep === 0}
                        >
                            {'||<'}
                        </Button>
                        <Button
                            size="small"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                        >
                            Previous
                        </Button>
                    </>
                }
            />
        </Box>
    );
}