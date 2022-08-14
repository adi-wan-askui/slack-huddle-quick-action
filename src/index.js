const { UiControlClient } = require('askui');

async function inviteToHuddleOnSlack(aui, nameOfCallee) {
    await aui.pressTwoKeys('command', 'space').exec();
    await aui.type('Slack').exec();
    await aui.pressKey('enter').exec();
    await aui.click().text().containsText('Search').in().header().exec();
    await aui.click().button().withText('People').below().text().withText('I\'m looking for...').exec();
    await aui.type(nameOfCallee).exec();
    await aui.click().text().withText(nameOfCallee).rightOf().image().exec();
    await aui.click().icon().withText('phone').rightOf().text().withText(nameOfCallee).exec();
    await aui.click().text().withText('Start a huddle').exec();
}

async function main() {
    let aui = await UiControlClient.build();
    await aui.connect();
    
    const nameOfCallee = process.argv[2];
    await inviteToHuddleOnSlack(aui, nameOfCallee);

    aui.close();
}

main();
