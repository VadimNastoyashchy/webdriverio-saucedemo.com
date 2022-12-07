import axios from 'axios';

describe('Api tests', () => {
    it('POST "bycat" endpoint', async () => {
        const response = await axios.post('https://api.demoblaze.com/bycat', { cat: 'phone' });
        console.log(response.data);
        await expect(response.status).toEqual(200);
    });

    it('Should demonstrate response overwrite with static data', async () => {
        const mock = await browser.mock('**/entries', {
            method: 'get'
        });

        mock.respond({ "Items": [{ "cat": "phone", "desc": "Should demonstrate response overwrite with static data", "id": 1, "img": "imgs/galaxy_s6.jpg", "price": 360.0, "title": "DEMONSTRATE INTERCEPT" }, { "cat": "phone", "desc": "The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. ", "id": 2, "img": "imgs/Lumia_1520.jpg", "price": 820.0, "title": "Nokia lumia 1520" }, { "cat": "phone", "desc": "The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.", "id": 3, "img": "imgs/Nexus_6.jpg", "price": 650.0, "title": "Nexus 6" }, { "cat": "phone", "desc": "The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB \nof RAM. The phone packs 32GB of internal storage that can be expanded up\n to 200GB via a microSD card.", "id": 4, "img": "imgs/galaxy_s6.jpg", "price": 800.0, "title": "Samsung galaxy s7" }, { "cat": "phone", "desc": "It comes with 1GB of RAM. The phone packs 16GB of internal storage \ncannot be expanded. As far as the cameras are concerned, the Apple \niPhone 6 packs a 8-megapixel primary camera on the rear and a \n1.2-megapixel front shooter for selfies.", "id": 5, "img": "imgs/iphone_6.jpg", "price": 790.0, "title": "Iphone 6 32gb" }, { "cat": "phone", "desc": "Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \npixels by 1920 pixels at a PPI of 424 pixels per inch.", "id": 6, "img": "imgs/xperia_z5.jpg", "price": 320.0, "title": "Sony xperia z5" }, { "cat": "phone", "desc": "The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 \nprocessor and it comes with 3GB of RAM. The phone packs 32GB of internal\n storage that can be expanded up to 128GB via a microSD card. ", "id": 7, "img": "imgs/HTC_M9.jpg", "price": 700.0, "title": "HTC One M9" }, { "cat": "notebook", "desc": "Sony is so confident that the VAIO S is a superior ultraportable laptop \nthat the company proudly compares the notebook to Apple's 13-inch \nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \nlighter weight.", "id": 8, "img": "imgs/sony_vaio_5.jpg", "price": 790.0, "title": "Sony vaio i5" }, { "cat": "notebook", "desc": "REVIEW\n \nSony is so confident that the VAIO S is a superior \nultraportable laptop that the company proudly compares the notebook to \nApple's 13-inch MacBook Pro. And in a lot of ways this notebook is \nbetter, thanks to a lighter weight, higher-resolution display, more \nstorage space, and a Blu-ray drive. ", "id": 9, "img": "imgs/sony_vaio_5.jpg", "price": 790.0, "title": "Sony vaio i7\n" }], "LastEvaluatedKey": { "id": "9" } }
            , {
                statusCode: 200,
                fetchResponse: true
            });

        await browser.url('https://www.demoblaze.com/');
        await expect(await $('aria/DEMONSTRATE INTERCEPT')).toBeDisplayed();
    });

    it('Should abort request', async () => {
        const mock = await browser.mock('**/entries', {
            method: 'get',
        });

        mock.abort('Failed');
        await browser.url('https://www.demoblaze.com/');
        await $('aria/DEMONSTRATE INTERCEPT').waitForExist({ timeout: 1000, reverse: true, timeoutMsg: 'Element is no exist on the page' })
    });

});