export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'first_name',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'last_name',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image of Author',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Brief Bio of Author',
      type: 'text',
    },
     {
      name: 'Facebook',
      title: 'Facebook',
      type: 'string',
    },
     {
      name: 'Instagram',
      title: 'Instagram',
      type: 'string',
    },
     {
      name: 'Twitter',
      title: 'Twitter',
      type: 'string',
    },
  ],
}
