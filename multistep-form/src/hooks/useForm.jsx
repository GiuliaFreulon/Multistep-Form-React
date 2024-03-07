import { useState } from "react";

export function useForm(steps) {
  const [currentStep, SetCurrentStep] = useState(0);

  // Muda as páginas
  function changeStep(i, e) {
    // Impede que o botão de Avançar recarregue a página
    if (e) e.preventDefault();

    // Evita que páginas que não existem sejam acessadas
    if (i < 0 || i >= steps.length) return;

    SetCurrentStep(i);
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false,
  };
}
