import {createClient} from '@sanity/client';

const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId: process.env.SANITY_PROJECT_ID,
    apiVersion: 'v1',
    useCdn: false
}

export default createClient(options);