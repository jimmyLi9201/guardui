export async function request(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4 || xhr.status === 0) return

            if (xhr.status >= 200 && xhr.status < 300) {
                const responseData = JSON.parse(xhr.response);
                resolve(responseData);
            } else {
                reject(`request failed with status code ${xhr.status}\nurl: ${url}`);
            }
        }
    });
}