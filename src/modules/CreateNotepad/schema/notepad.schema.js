import * as Yup from "yup";

export const notepadSchema = Yup.object().shape({
  title: Yup
    .string('Notepad title is required')
    .max(255, 'Title should be of maximum 255 characters length')
    .required('Notepad Title is required'),
  notes: Yup.array().of(
    Yup.object().shape({
      title: Yup
        .string().required("Note title is required")
        .max(255, 'Title should be of maximum 255 characters length'),
      note: Yup
        .string().required("Note is required")
        .max(1000, 'Note should be of maximum 1000 characters length'),
    })
  )
});