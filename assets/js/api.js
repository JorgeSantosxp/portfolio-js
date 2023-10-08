
async function fethProfileData() {
    const url = 'https://raw.githubusercontent.com/JorgeSantosxp/portfolio-js/main/assets/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}