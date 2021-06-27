import * as Yup from "yup";

// @TODO empty string validation

export const notepadSchema = Yup.object().shape({
  title: Yup
    .string('Title is required')
    .max(255, 'Title should be of maximum 255 characters length.')
    .required('Title is required.'),
  notes: Yup.array().of(
    Yup.object().shape({
      title: Yup
        .string('Title is required.')
        .required("Title is required.")
        .max(255, 'Title should be of maximum 255 characters length.'),
      note: Yup
        .string().required("Note is required.")
        .max(1000, 'Note should be of maximum 1000 characters length.'),
    })
  )
});