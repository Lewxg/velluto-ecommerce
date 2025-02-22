import React from 'react';
import { Check } from 'lucide-react';

interface CheckoutStepsProps {
  currentStep: 'cart' | 'shipping' | 'payment';
}

const steps = [
  { id: 'cart', name: 'Carrinho' },
  { id: 'shipping', name: 'Entrega' },
  { id: 'payment', name: 'Pagamento' },
];

const CheckoutSteps: React.FC<CheckoutStepsProps> = ({ currentStep }) => {
  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.id === currentStep);
  };

  return (
    <nav aria-label="Progress">
      <ol className="flex items-center">
        {steps.map((step, stepIdx) => {
          const isComplete = getCurrentStepIndex() > stepIdx;
          const isCurrent = step.id === currentStep;

          return (
            <li
              key={step.name}
              className={`${
                stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''
              } relative`}
            >
              {isComplete ? (
                <div className="group">
                  <span className="flex items-center">
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary-600">
                      <Check className="h-5 w-5 text-white" />
                      <span className="absolute -inset-2" />
                    </span>
                    <span className="ml-4 text-sm font-medium text-primary-900">
                      {step.name}
                    </span>
                  </span>
                </div>
              ) : (
                <div className="group">
                  <span className="flex items-center">
                    <span
                      className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                        isCurrent
                          ? 'border-primary-600 bg-white'
                          : 'border-primary-300 bg-white'
                      }`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          isCurrent ? 'bg-primary-600' : 'bg-transparent'
                        }`}
                      />
                      <span className="absolute -inset-2" />
                    </span>
                    <span
                      className={`ml-4 text-sm font-medium ${
                        isCurrent ? 'text-primary-900' : 'text-primary-500'
                      }`}
                    >
                      {step.name}
                    </span>
                  </span>
                </div>
              )}

              {stepIdx !== steps.length - 1 && (
                <div
                  className={`absolute left-0 top-4 -ml-px mt-0.5 h-0.5 w-full ${
                    isComplete ? 'bg-primary-600' : 'bg-primary-300'
                  }`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default CheckoutSteps;