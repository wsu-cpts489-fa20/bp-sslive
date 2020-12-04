import { async } from 'regenerator-runtime';
import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

fixture`SpeedScoreLive Interactions`.page`localhost:3000`;
    //.page`http://localhost:8081/`;

test('GetToBasicInfo', async t => {
    await t
        //.typeText('#emailInput', 'director')
        //.click('#login-btn-icon')
        .expect(Selector('#tournamentConfigBtn').visible).eql(true)
        .click('#tournamentConfigBtn')
        .expect(Selector('#logoColorTab').visible).eql(true)
        .click('#logoColorTab')
        .expect(Selector('#logoColorDiv').visible).eql(true)
        .wait(500)
});