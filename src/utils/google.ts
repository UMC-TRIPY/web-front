export const getAuthCode = async () => {
    const code = window.location.href.split('?')[1].split('&')[0].slice(5);
    return code;
};
