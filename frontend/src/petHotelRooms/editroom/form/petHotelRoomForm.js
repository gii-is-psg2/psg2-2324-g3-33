import { formValidators } from "../../../validators/formValidators";
export const petHotelRoomEdit = [
    {
        tag: "Name",
        name: "name",
        type: "text",
        defaultValue: "",
        isRequired: true,
        validators: [formValidators.notEmptyValidator],
    },
    {
        tag: "PetType",
        name: "petType",
        type: "select",
        values: ["None", "dog", "cat", "lizard","snake", "bird", "hamster","turtle"],
        defaultValue: "None",
        isRequired: true,
        validators: [formValidators.notEmptyValidator, formValidators.notNoneTypeValidator],
    },
];