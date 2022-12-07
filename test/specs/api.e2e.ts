import axios from 'axios';

describe('Api tests', () => {
    it('POST "bycat" endpoint', async () => {
        const response = await axios.post('https://api.demoblaze.com/bycat', { cat: 'phone' });
        console.log(response.data);
        await expect(response.status).toEqual(200);
    });
});