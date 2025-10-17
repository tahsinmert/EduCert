import { defineType, defineField } from "sanity";

export const course = defineType({
  name: "course",
  title: "Kurs",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Başlık",
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
      name: "shortDescription",
      title: "Kısa Açıklama",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "coverImage",
      title: "Kapak Görseli",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "duration",
      title: "Süre",
      type: "string",
      description: "Örn: 4 hafta, 20 saat",
    }),
    defineField({
      name: "level",
      title: "Seviye",
      type: "string",
      options: {
        list: [
          { title: "Başlangıç", value: "beginner" },
          { title: "Orta", value: "intermediate" },
          { title: "İleri", value: "advanced" },
        ],
      },
    }),
    defineField({
      name: "tags",
      title: "Etiketler",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "educationType",
      title: "Eğitim Türü",
      type: "string",
      description: "Sertifikada gösterilecek eğitim türü (ör: Web Geliştirme Eğitimi)",
    }),
    defineField({
      name: "content",
      title: "İçerik",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
  },
});

