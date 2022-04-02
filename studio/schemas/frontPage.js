export default {
  name: 'frontPage',
  title: 'FrontPage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'seotitle',
      title: 'SEO Title',
      type: 'string'
    },
    {
      name: 'seodesc',
      title: 'SEO Description',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'callout',
      title: 'Call Out',
      type: 'string'
    },
    {
      name: 'bodytop',
      title: 'Body top',
      type: 'blockContent',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'certs_1',
      title: 'Certification One',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'certs_2',
      title: 'Certification Two',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'certs_3',
      title: 'Certification Three',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'body',
      title: 'Body Bottom',
      type: 'blockContent'
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
