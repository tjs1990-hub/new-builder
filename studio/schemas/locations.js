export default {
  name: 'locations',
  title: 'Locations',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [
        {type: 'locations'}
      ]

    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'seotitle',
      title: 'SEO Title',
      type: 'string',
    },
    {
      name: 'seodesc',
      title: 'SEO Description',
      type: 'string',
    },
  ]
};
