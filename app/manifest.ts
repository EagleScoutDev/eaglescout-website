import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'EagleScout',
        short_name: 'EagleScout',
        description: 'Next-generation scouting for FRC',
        start_url: '/',
        display: 'standalone',
        background_color: '#3c65cb',
        theme_color: '#3c65cb',
    };
}
