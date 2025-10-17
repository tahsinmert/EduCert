import { defineType, defineField } from "sanity";

export const certificateTemplate = defineType({
  name: "certificateTemplate",
  title: "Sertifika Şablonu",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Şablon Adı",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bgImage",
      title: "Arka Plan Görseli (Opsiyonel)",
      type: "image",
    }),
    defineField({
      name: "primaryColor",
      title: "Ana Renk",
      type: "string",
      description: "Hex kodu (ör: #818CF8)",
      initialValue: "#818CF8",
    }),
    defineField({
      name: "issuedBy",
      title: "Veren Kuruluş",
      type: "string",
      initialValue: "EduCert Platform",
    }),
    defineField({
      name: "bodyText",
      title: "Gövde Metni",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "footerText",
      title: "Alt Metin",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "bgImage",
    },
  },
});

