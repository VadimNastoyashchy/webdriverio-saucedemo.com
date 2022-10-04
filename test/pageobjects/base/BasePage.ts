export default abstract class BasePage {
    protected readonly PAGE_NAME: string;
    protected readonly PAGE_URL: string;

    // eslint-disable-next-line @typescript-eslint/typedef
    constructor(pageName: string, pageUrl = '') {
        this.PAGE_NAME = pageName;
        this.PAGE_URL = pageUrl;
    }

    public async open(): Promise<void> {
        await browser.url(`${browser.options.baseUrl}${this.PAGE_URL}`);
    }

    public async getPageUrl(): Promise<string> {
        return `${browser.options.baseUrl}${this.PAGE_URL}`;
    }
}