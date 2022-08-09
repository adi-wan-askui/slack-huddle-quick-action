const { UiControlClient } = require('askui');

async function main() {
    let aui = await UiControlClient.build();
    await aui.connect();
    await aui.click().text().exec();
    aui.close();
}

main();
