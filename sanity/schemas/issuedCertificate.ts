import { defineType, defineField } from "sanity";

export const issuedCertificate = defineType({
  name: "issuedCertificate",
  title: "Verilmiş Sertifika",
  type: "document",
  fields: [
    defineField({
      name: "userName",
      title: "Kullanıcı Adı",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "course",
      title: "Kurs",
      type: "reference",
      to: [{ type: "course" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "template",
      title: "Şablon",
      type: "reference",
      to: [{ type: "certificateTemplate" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "issueDate",
      title: "Verilme Tarihi",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "verificationCode",
      title: "Doğrulama Kodu",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publicUrl",
      title: "Public URL",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pdfUrl",
      title: "PDF URL (Opsiyonel)",
      type: "string",
    }),
  ],
  preview: {
    select: {
      userName: "userName",
      courseTitle: "course.title",
    },
    prepare({ userName, courseTitle }) {
      return {
        title: `${userName} - ${courseTitle}`,
      };
    },
  },
});

