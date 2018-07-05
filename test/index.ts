import {expect} from 'chai';
import m from 'mocha';

import RPSGithub from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('Github', () => {

  m.it('should get organization repos', async function () {
    let md = new RPSGithub;

    // let output = await md.getForOrg(new RpsContext,{},"octokit","public");

    // console.log(output);

    let user = await md.getForUser(new RpsContext,{},"wei3hua2");

    console.log(user);

  }).timeout(0);

})
