import {defineField, defineType} from 'sanity'

export const heroType = defineType({
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
        defineField({
            name: 'titleFirstPart',
            type: 'string',
            initialValue:'Complete',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'highlightedTitle',
            type: 'string',
            initialValue:'Vue.js training',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'titleLastPart',
            type: 'string',
            initialValue:'solutions for companies',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'paragraph',
            type: 'string',
            initialValue:' Training solutions designed for companies, agencies and organisations with developers using\n' +
                '          or who are considering using the Vue.js framework',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'buttonText',
            type: 'string',
            initialValue:'Talk to Sales',
            validation: (Rule) => Rule.required(),
        }),
    ],
})