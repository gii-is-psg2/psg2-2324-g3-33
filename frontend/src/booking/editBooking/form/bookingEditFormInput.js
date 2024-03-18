import { formValidators } from "../../../validators/formValidators";

export const bookingEditFormInput = [
  {
    tag: "StartDate",
    name: "startDate",
    type: "date",
    defaultValue: "",
    isRequired: true,
    validators: [formValidators.notEmptyValidator],
  },
  {
    tag: "FinishDate",
    name: "finishDate",
    type: "date",
    defaultValue: "",
    isRequired: true,
    validators: [formValidators.notEmptyValidator],
  }
]