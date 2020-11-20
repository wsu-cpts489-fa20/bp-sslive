import { Selector } from 'testcafe';

fixture `SpeedScore Interactions`
    .page `http://localhost:8081/`;

test('Login goes to director main page', async t => {
        const email = 'director';
        const emailInput = Selector('#emailInput');
    await t
        .click('#tournamentAccessCode')
        .typeText(emailInput, email)
        .expect(emailInput.value).eql(email)
        
        .click('#loginBtn')
        .expect(Selector('#directorMainPage').visible).eql(true)
});