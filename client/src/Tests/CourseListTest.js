import { async } from 'regenerator-runtime';
import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

fixture`SpeedScoreLive Interactions`
    .page`http://localhost:8081/`;

test('NavigateToCourses', async t => {
    await t
        .typeText('#emailInput', 'director')
        .click('#login-btn-icon')
        .expect(Selector('#tournamentConfigBtn').visible).eql(true)
        .click('#tournamentConfigBtn')
        .expect(Selector('#coursesTab').visible).eql(true)
        .expect(Selector('#coursesListDiv').visible).eql(true)
        .wait(500)
});

//DL -- NOTE cannot use testcafe to test HTML5 datalists
test('AddCourse', async t => {
    await t
        .typeText('#emailInput', 'director')
        .click('#login-btn-icon')
        .expect(Selector('#tournamentConfigBtn').visible).eql(true)
        .click('#tournamentConfigBtn')
        .expect(Selector('#coursesTab').visible).eql(true)
        .expect(Selector('#coursesListDiv').visible).eql(true)
        .click('#addCourseBtn')
        .expect(Selector('#selectCourseBtn').visible).eql(true)
        .click('#searchInput')
        .typeText('#searchInput', 'Windross Farm Golf Course (Auckland, NZ)')
        .click('#selectCourseBtn')
        .expect(Selector('#courseInput').value).eql('Windross Farm Golf Course  ')
        .expect(Selector('#locationInput').value).eql('Auckland, NZ')
        .expect(Selector('#teesInput').value).eql("")
        .typeText('#t0', '0:2:34')
        .typeText('#t1', '0:2:34')
        .typeText('#t2', '0:2:34')
        .typeText('#t3', '0:2:34')
        .typeText('#t4', '0:2:34')
        .typeText('#t5', '0:2:34')
        .typeText('#t6', '0:2:34')
        .typeText('#t7', '0:2:34')
        .typeText('#t8', '0:2:34')
        .click('#submitCourseBtn')
        .expect(Selector('td').innerText).eql('Windross Farm Golf Course')
        .wait(5000)
})