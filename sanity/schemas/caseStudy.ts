import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  fields: [
    defineField({ name: 'tag', title: 'Industry Tag', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'roas', title: 'ROAS', type: 'string' }),
    defineField({ name: 'cacReduction', title: 'CAC Reduction', type: 'string' }),
    defineField({ name: 'adSpend', title: 'Monthly Ad Spend', type: 'string' }),
    defineField({ name: 'revenue', title: 'Revenue', type: 'string' }),
    defineField({ name: 'duration', title: 'Engagement Duration', type: 'string' }),
    defineField({ name: 'channels', title: 'Channels Used', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
});
