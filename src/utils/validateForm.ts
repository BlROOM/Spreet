type FormDataValidationResult = {
  valid: boolean;
  missingField?: string;
};

export default function validateForm(
  data: FormData,
  requiredFields: string[]
): FormDataValidationResult {
  for (const field of requiredFields) {
    if (!data.get(field)) {
      return { valid: false, missingField: field };
    }
  }
  return { valid: true };
}
