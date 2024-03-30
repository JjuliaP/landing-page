import {defineField, defineType} from 'sanity'

export const coursesType = defineType({
    name: 'courses',
    title: 'Courses Section',
    type: 'document',
    fields: [
        defineField({
            name: 'video',
            title: 'Video Number',
            type: 'number',
            initialValue:0,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'courses',
            title: 'Courses Number',
            type: 'number',
            initialValue:0,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'hours',
            title: 'Hours Number',
            type: 'number',
            initialValue:0,
            validation: (Rule) => Rule.required(),
        }),
    ],
})