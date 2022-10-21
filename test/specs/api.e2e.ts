import axios from 'axios';

describe('', () => {
    it('', async () => {
        const response = await axios.post('https://api.demoblaze.com/bycat', { cat: 'phone' });
        console.log(response.data);
        await expect(response.status).toEqual(200);
    });
});