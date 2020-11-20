import { Selector } from 'testcafe';

fixture `SpeedScore Interactions`
    .page `http://localhost:8081/`;

test('Login goes to director main page', async t => {
        const email = 'director';
        const emailInput = Selector('#emailInput');
    await t
        .typeText('#emailInput', email)
        .expect(emailInput.value).eql(email)
        .click('#loginBtn')
        .expect(Selector('#directorMainPage').visible).eql(true)
        .expect(Selector('#tournamentConfigBtn').visible).eql(true)
        .click('#tournamentConfigBtn')
        .expect(Selector('#roundsTab').visible).eql(true)
        .click('#roundsTab')
        .wait(500)

});