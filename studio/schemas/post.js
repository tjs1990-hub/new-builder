export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },{
      name: 'seotitle',
      title: 'SEO Title',
      description: 'Maximum Text 65 Char ',
      type: 'string',
      options: {
        source: 'title',
        maxLength: 65
      },
      validation: Rule => Rule.required().min(10).max(65),
      validation: Rule => Rule.max(65).warning('Shorter titles are usually better for SEO')
    },
    {
      name: 'seodesc',
      title: 'SEO Description',
      description: 'Maximum Text 150 Char ',
      type: 'text',
      options: {
        source: 'title',
        maxLength: 150
      },
      validation: Rule => Rule.required().min(120).max(150),
      validation: Rule => Rule.max(150).warning('Your SEO Desc needs to be between 120 and 150 chars long, please shorten yours')
      
    
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
