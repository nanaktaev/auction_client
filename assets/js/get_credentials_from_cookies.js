function getCredentialsFromCookies() {
    const username = $.cookie("username");
    const password = $.cookie("password");
    return {
        username: username,
        password: password
    }
}