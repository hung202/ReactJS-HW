import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  to: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

const initialValues = {
  to: "",
  subject: "",
  message: "",
  attachments: [],
};

const EmailForm = () => {
  const [attachments, setAttachments] = useState([]);

  const handleAttachmentChange = (event) => {
    const files = Array.from(event.target.files);
    setAttachments([...attachments, ...files]);
  };

  const handleAttachmentRemove = (file) => {
    const newAttachments = attachments.filter(
      (attachment) => attachment !== file
    );
    setAttachments(newAttachments);
  };

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("to", values.to);
    formData.append("subject", values.subject);
    formData.append("message", values.message);
    attachments.forEach((attachment) => {
      formData.append("attachments[]", attachment);
    });
    console.log(formData);
    // TODO: Handle submit with the form data
    resetForm();
    setAttachments([]);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <div>
            <label htmlFor="to">To:</label>
            <Field type="email" name="to" />
            <ErrorMessage name="to" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <Field type="text" name="subject" />
            <ErrorMessage name="subject" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <Field as="textarea" name="message" />
            <ErrorMessage name="message" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="attachments">Attachments:</label>
            <input
              type="file"
              name="attachments"
              multiple
              onChange={handleAttachmentChange}
            />
            {attachments.map((attachment) => (
              <div key={attachment.name}>
                <span>{attachment.name}</span>
                <button
                  type="button"
                  onClick={() => handleAttachmentRemove(attachment)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EmailForm;
