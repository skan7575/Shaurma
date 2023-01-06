const baseUrl = 'https://63ad51503e46516916562f86.mockapi.io/items';
class Api {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl
        this.headers = headers
    }

    getProduct() {
        return fetch(`${(this.baseUrl)}`, {
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    console.log('ошибка получения карточек')
                }
            })
    }
}

export const api = new Api({
    baseUrl: baseUrl,
})