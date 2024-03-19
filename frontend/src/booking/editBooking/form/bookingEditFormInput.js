import { formValidators } from "../../../validators/formValidators";

export const bookingEditFormInput = [
  {
    tag: "StartDate",
    name: "startDate",
    type: "datetime-local",
    defaultValue: "",
    isRequired: true,
    validators: [formValidators.notEmptyValidator],
  },
  {
    tag: "FinishDate",
    name: "finishDate",
    type: "datetime-local",
    defaultValue: "",
    isRequired: true,
    validators: [formValidators.notEmptyValidator],
  }
]