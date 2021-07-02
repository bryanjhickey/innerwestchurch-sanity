export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Leader’s Name',
      type: 'string',
    },
     {
      name: 'position',
      title: 'Position of Staff Member',
      type: 'string',
      description: 'Pastor, Associate Pastor etc.'
    },
    {
      name: 'role',
      title: 'Role of Staff Member',
      type: 'string',
      description: 'Missional Engagement. Women’s Discipleship.'
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
      title: 'Brief Bio of Staff Member',
      type: 'text',
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email", // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          }
        ),
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
  ],
}
