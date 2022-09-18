import {FormGroup, ValidationErrors} from "@angular/forms";

export function passwordValidator(group: FormGroup): ValidationErrors | null {
  const passwordValue = group.get('password')?.value;
  const confPasswordValue = group.get('confPassword')?.value;
  if (group.get('password')?.valid && group.get('confPassword')?.valid) {
    if (passwordValue === confPasswordValue ) {
      return null;
    }
    return {error: '!PASSWORD NOT SAME!'};
  }
  return null;
};



