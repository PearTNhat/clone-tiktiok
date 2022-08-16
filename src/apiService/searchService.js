import * as request from '~/component/utils/request';
async function searchApi(q, type = 'less') {
    try {
        const response = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return response;
    } catch {
        console.log('error');
    }
}

export { searchApi };
