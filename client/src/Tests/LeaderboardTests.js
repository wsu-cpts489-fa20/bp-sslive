import { async } from 'regenerator-runtime';
import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

fixture`SpeedScoreLive Interactions`
    .page`http://localhost:8081/`;

test('NavigateToLeaderboard', async t => {
    await t
        .click("#tournamentAccessCode")
        .expect(Selector('#emailInput').visible).eql(true)
        .typeText('#emailInput', 'director')
        .click('#loginBtn')
        .expect(Selector('#tournamentConfigBtn').visible).eql(true)
        .click('#tournamentConfigBtn')
        .expect(Selector('#divisionsTab').visible).eql(true)
        .click("#menuBtnIcon")
        .expect(Selector("#aboutBtn").visible).eql(true)
        .click("#leaderboardBtn")
        .expect(Selector("#speedScoreLogo").visible).eql(true)
        .wait(1000)
});