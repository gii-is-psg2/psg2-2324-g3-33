import { formValidators } from "../../../validators/formValidators";

export const adoptionEditFormInput = [
  {
    tag: "Description",
    name: "description",
    type: "text",
    defaultValue: "",
    isRequired: true,
    validators: [formValidators.notEmptyValidator],
  },
]
