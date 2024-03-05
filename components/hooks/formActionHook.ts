import { useState } from "react";

export const useFormActions = (formActionFunction: (formData: FormData) => Promise<any>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (formData: FormData) => {
    
    try {
      setIsLoading(true);
      await formActionFunction(formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    isLoading,
  };
};
