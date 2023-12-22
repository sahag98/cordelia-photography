export default {
  name: "categories",
  title: "Categories",
  type: "document",
  fields: [
    {
      name: "name",
      title: "title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "pictures",
      title: "Pictures",
      type: "array",
      of: [{ type: "pictures" }],
    },
  ],
};
