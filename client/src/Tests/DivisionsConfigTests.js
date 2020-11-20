import { async } from 'regenerator-runtime';
import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

fixture`SpeedScoreLive Interactions`
    .page`http://localhost:8081/`;

test('NavigateToDivisions', async t => {
    await t
        .typeText('#emailInput', 'director')
        .click('#login-btn-icon')
        .expect(Selector('#tournamentConfigBtn').visible).eql(true)
        .click('#tournamentConfigBtn')
        .expect(Selector('#divisionsTab').visible).eql(true)
        .click('#divisionsTab')
        .expect(Selector('#divisionsListDiv').visible).eql(true)
        .wait(500)
});

//DL -- NOTE cannot use testcafe to test HTML5 datalists
test('NavigateToAddDivision', async t => {
    await t
        .typeText('#emailInput', 'director')
        .click('#login-btn-icon')
        .expect(Selector('#tournamentConfigBtn').visible).eql(true)
        .click('#tournamentConfigBtn')
        .expect(Selector('#divisionsTab').visible).eql(true)
        .click('#divisionsTab')
        .expect(Selector('#divisionsListDiv').visible).eql(true)
        .expect(Selector('#addDivisionBtn').visible).eql(true)
        .click('#addDivisionBtn')
        .expect(Selector('#divisionsFormDiv').visible).eql(true)
        .wait(500)
})