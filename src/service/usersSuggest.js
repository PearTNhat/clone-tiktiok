import * as request from '~/utils/request';
async function getSuggest({ page, perPage }) {
    try {
        const response = await request.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return response;
    } catch {
        console.log('error');
    }
}
async function getFollowing({ page }) {
    try {
        const response = await request.get('me/followings', {
            params: {
                page,
            },
        });
        return response;
    } catch {
        console.log('error');
    }
}
export { getSuggest, getFollowing };
